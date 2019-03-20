// code away!

// require the express npm module, needs to be added to the project using "yarn add" or "npm install"
const express = require('express');
const posts = require('./data/helpers/postDb');
const users = require('./data/helpers/userDb');

// creates an express application using the express module
const server = express();
server.use(express.json());
const port = 9000;

const errorHelper = (status, message, res) => {
    res.status(status).json({ error: message });
  };

server.get('/api/users', (req, res) => {
users
    .get()
    .then(foundUsers => {
    res.json(foundUsers);
    })
    .catch(err => {
    return errorHelper(500, 'Database boof', res);
    });
});

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(port, () => {
    console.log("Server is starting up.");
});