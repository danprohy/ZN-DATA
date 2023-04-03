const playerController = require("../controller/player.controller");

const router = require("express").Router();

// ADD PLAYER
router.post("/", playerController.addPlayer);

router.post("/many", playerController.addMultiPlayer);

// GET ALL PLAYER
router.get("/", playerController.getAllPlayer);

// GET A PLAYER
router.get("/:id", playerController.getAPlayer);

// UPDATE DATA PLAYER
router.put("/:id", playerController.updatePlayer);

// DELETE PLAYER
router.delete("/:id", playerController.deletePlayer);

module.exports = router;
