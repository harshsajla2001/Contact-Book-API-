const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//@desc register user
//@route POST /api/user
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required")
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!")
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword })
    console.log("user created: ", user)
    if (user) {
        res.status(201).json({ message: "Register user successfully", _id: user.id, email: user.email })
    } else {
        res.status(400);
        throw new Error("User data is not valid")
    }
})
//@desc login user
//@route POST /api/user 
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required")
    }
    const user = await User.findOne({ email })
    if (!user) {
        res.status(400);
        throw new Error("User is not registered!")
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN_SECERT,
            { expiresIn: "59m" })
        res.status(200).json({ message: "logged in user successfully", accessToken })
    } else {
        res.status(401)
        throw new Error("email or passoword is not valid")
    }
})
//@desccurrent user info
//@route POST /api/users/current
//@access private 
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Get Current user successfully", user: req.user })
})

module.exports = { registerUser, loginUser, currentUser };