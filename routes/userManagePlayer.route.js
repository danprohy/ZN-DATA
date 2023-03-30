const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/auth");

const userManagePlayerController = require("../controller/userManagePlayer.controller");
// user/post
// ADD PLAYER
// Private
route.post("/create", verifyToken, userManagePlayerController.addPlayer); // Kiem tra Token, ok roi moi tiep tuc thc hien

module.exports = route;