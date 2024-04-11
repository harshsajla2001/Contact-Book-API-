const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    console.log("user_id:  ", req?.user?.id)
    const contacts = await Contact.find({ user_id: req?.user?.id });
    res.status(200).json({ message: "Get user contact successfully", contacts })
})

//@desc create new contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req?.user?.id
    })
    res.status(201).json({ message: "Created user contact successfully", contact })
})

//@desc get contacts
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({ message: "Get user contact successfully", contact });
})

//@desc update contacts
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("You can't access other's contacts")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json({ message: "Updated user contact successfully", updatedContact })
})

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("You can't delete other's contacts")
    }
    const deletedContact = await Contact.deleteOne({ _id: req.params.id });
    console.log(deletedContact)
    res.status(200).json({ message: "Deleted user contact successfully", contact })
})

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };