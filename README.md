# Contact Book

This Web App is your digital address book, ensuring secure management of your contacts. It empowers you to create a personalized account where you can meticulously organize and safeguard your crucial contacts. With an emphasis on privacy and security, only you have access to your stored contacts, guaranteeing confidentiality and peace of mind.

## Features

- User authentication: Create an account and log in securely.
- Add contacts: Easily add new contacts with detailed information.
- Edit and delete contacts: Update your contact information as needed.
- Search functionality: Quickly find the contacts you're looking for.

## Technologies Used

- Backend: Node.js, Express.js, mongoose.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
## API Reference 

### For creating account
```http
POST /api/users/register
```
```
Request: body -> {
  "username": "bheem",
  "email": "bheem@email.com",
  "password": "123456"
}

response: {
  "message": "Register user successfully",
  "_id": "6618180ddeb20b531c84521b",
  "email": "bheem@email.com"
}
```

### For login to account
```http
POST /api/users/login 
```
```
Request: body -> example {
  "email": "bheem@email.com",
  "password": "123456"
}

response: {
  "message": "logged in user successfully",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmhlZW0iLCJlbWFpbCI6ImJoZWVtQGVtYWlsLmNvbSIsImlkIjoiNjYxODE4MGRkZWIyMGI1MzFjODQ1MjFiIn0sImlhdCI6MTcxMjg1NTY5MSwiZXhwIjoxNzEyODU5MjMxfQ.YPzGIveBnwzDr-T_ZixyYv2d-DT9OmaWX_vas9P1RZo"
}
```
### For getting current user account info
```http
GET /api/users/current
```
```
Request: Auth(Bearer Token) -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmhlZW0iLCJlbWFpbCI6ImJoZWVtQGVtYWlsLmNvbSIsImlkIjoiNjYxODE4MGRkZWIyMGI1MzFjODQ1MjFiIn0sImlhdCI6MTcxMjg1NTY5MSwiZXhwIjoxNzEyODU5MjMxfQ.YPzGIveBnwzDr-T_ZixyYv2d-DT9OmaWX_vas9P1RZo

response: {
  "message": "Get Current user successfully",
  "user": {
    "username": "bheem",
    "email": "bheem@email.com",
    "id": "66153a9065c81ca37ae1b548"
  }
}
```
### For getting current user contacts
```http
GET /api/contacts/
```
```
Request: Auth(Bearer Token) -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmhlZW0iLCJlbWFpbCI6ImJoZWVtQGVtYWlsLmNvbSIsImlkIjoiNjYxODE4MGRkZWIyMGI1MzFjODQ1MjFiIn0sImlhdCI6MTcxMjg1NTY5MSwiZXhwIjoxNzEyODU5MjMxfQ.YPzGIveBnwzDr-T_ZixyYv2d-DT9OmaWX_vas9P1RZo

response: {
  "message": "Get user contact successfully",
  "contacts": []
}
```
### For creating contacts
```http
POST /api/contacts/
```
```
Request: Auth(Bearer Token) ->  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmhlZW0iLCJlbWFpbCI6ImJoZWVtQGVtYWlsLmNvbSIsImlkIjoiNjYxODE4MGRkZWIyMGI1MzFjODQ1MjFiIn0sImlhdCI6MTcxMjg1NTY5MSwiZXhwIjoxNzEyODU5MjMxfQ.YPzGIveBnwzDr-T_ZixyYv2d-DT9OmaWX_vas9P1RZo
Body -> {
  "name": "raju",
  "email": "raju@g.com",
  "phone": "956823147"
}

response: {
  "message": "Created user contact successfully",
  "contact": {
    "user_id": "6618180ddeb20b531c84521b",
    "name": "raju",
    "email": "raju@g.com",
    "phone": "956823147",
    "_id": "66181cc8deb20b531c845220",
    "createdAt": "2024-04-11T17:24:24.591Z",
    "updatedAt": "2024-04-11T17:24:24.591Z",
    "__v": 0
  }
}
```
### For getting single contacts
```http
POST /api/contacts/${id}
```
```
Request: Auth(Bearer Token) ->  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmhlZW0iLCJlbWFpbCI6ImJoZWVtQGVtYWlsLmNvbSIsImlkIjoiNjYxODE4MGRkZWIyMGI1MzFjODQ1MjFiIn0sImlhdCI6MTcxMjg1NTY5MSwiZXhwIjoxNzEyODU5MjMxfQ.YPzGIveBnwzDr-T_ZixyYv2d-DT9OmaWX_vas9P1RZo
params(Contact Id) -> 66181cc8deb20b531c845220

response: {
  "message": "Get user contact successfully",
  "contact": {
    "_id": "66181cc8deb20b531c845220",
    "user_id": "6618180ddeb20b531c84521b",
    "name": "raju",
    "email": "raju@g.com",
    "phone": "956823147",
    "createdAt": "2024-04-11T17:24:24.591Z",
    "updatedAt": "2024-04-11T17:24:24.591Z",
    "__v": 0
  }
}
```
### For updating contact
```http
PUT /api/contacts/${id}
```
```
Request: Auth(Bearer Token) -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmhlZW0iLCJlbWFpbCI6ImJoZWVtQGVtYWlsLmNvbSIsImlkIjoiNjYxODE4MGRkZWIyMGI1MzFjODQ1MjFiIn0sImlhdCI6MTcxMjg1NTY5MSwiZXhwIjoxNzEyODU5MjMxfQ.YPzGIveBnwzDr-T_ZixyYv2d-DT9OmaWX_vas9P1RZo
params(Contact Id) -> 66181cc8deb20b531c845220
body(updated) -> {
  "name": "kaliya",
  "email": "kaliya@g.com",
  "phone": "956823147"
}

response(updated contact): {
  "message": "Updated user contact successfully",
  "updatedContact": {
    "_id": "66181cc8deb20b531c845220",
    "user_id": "6618180ddeb20b531c84521b",
    "name": "kaliya",
    "email": "kaliya@g.com",
    "phone": "956823147",
    "createdAt": "2024-04-11T17:24:24.591Z",
    "updatedAt": "2024-04-11T17:42:20.127Z",
    "__v": 0
  }
}
```
### For deleting contact
```http
DELETE /api/contacts/${id}
```
```
Request: Auth(Bearer Token) -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYmhlZW0iLCJlbWFpbCI6ImJoZWVtQGVtYWlsLmNvbSIsImlkIjoiNjYxODE4MGRkZWIyMGI1MzFjODQ1MjFiIn0sImlhdCI6MTcxMjg1NTY5MSwiZXhwIjoxNzEyODU5MjMxfQ.YPzGIveBnwzDr-T_ZixyYv2d-DT9OmaWX_vas9P1RZo
params(Contact Id) -> 66181cc8deb20b531c845220

response(deleted contact): {
  "message": "Deleted user contact successfully",
  "contact": {
    "_id": "66181cc8deb20b531c845220",
    "user_id": "6618180ddeb20b531c84521b",
    "name": "kaliya",
    "email": "kaliya@g.com",
    "phone": "956823147",
    "createdAt": "2024-04-11T17:24:24.591Z",
    "updatedAt": "2024-04-11T17:42:20.127Z",
    "__v": 0
  }
}
```


## Installation

```bash
Clone the repository: `git clone https://github.com/yourusername/contact-book.git`
Navigate to the project directory: `cd contact-book`
Install dependencies: `npm install`
Set up environment variables: Create a `.env` file in the root directory and add the following:
```
```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
```bash
Start the server: `npm run dev`
Open your browser and navigate to `http://localhost:5001`
  
```
### Contact

For support, contact me at harsh.sajla2001@gmail.com
## Author
### Harsh sajla
    Email Address: harsh.sajla2001@gmail.com
- [Github Profile](https://www.github.com/harshsajla2001)
- [LinkedIn Profile](https://www.linkedin.com/in/harsh-sajla-549304233/)


