const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/auth");

const userManagePlayerController = require("../controller/userManagePlayer.controller");
// user/player
// ADD PLAYER
// Private
route.post("/", verifyToken, userManagePlayerController.addPlayer); // Kiem tra Token, ok roi moi tiep tuc thc hien

// ADD MULTI PLAYER
// Creating Many
route.post("/many", verifyToken, userManagePlayerController.addMultiPlayers);

// user/player
// GET PLAYER
// Private
route.get("/", verifyToken, userManagePlayerController.getPlayer); // Kiem tra Token, ok roi moi tiep tuc thc hien

// user/player
// UPDATE PLAYER
// Private
route.put("/:id", verifyToken, userManagePlayerController.updatePlayer); // Kiem tra Token, ok roi moi tiep tuc thc hien

// user/player
// DELETE PLAYER
// Private
route.delete("/:id", verifyToken, userManagePlayerController.deletePlayer); // Kiem tra Token, ok roi moi tiep tuc thc hien

module.exports = route;
