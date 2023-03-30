const express = require("express");
const route = express.Router();

const userController = require("../controller/auth.controller");

// REGISTER
// Route: auth/register
// Access: public
route.post("/register", userController.register);

module.exports = route;
