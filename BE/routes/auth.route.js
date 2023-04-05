const express = require("express");
const verifyToken = require("../middleware/auth");
const route = express.Router();

const userController = require("../controller/auth.controller");

// GET AUTHENTICATE USER
// Route: /auth
// Access: public
route.get("/", verifyToken, userController.getAuthenticate);

// REGISTER
// Route: auth/register
// Access: public
route.post("/register", userController.register);

// LOGIN
// Route: auth/login
// Access: public
route.post("/login", userController.login);

module.exports = route;
