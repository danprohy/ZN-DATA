const { Player } = require("../model/model");

const playerController = {
  // ADD PLAYER
  addPlayer: async (req, res) => {
    try {
      const newPlayer = new Player(req.body);
      const savedPlayer = await newPlayer.save();
      res.status(200).json(savedPlayer);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // ADD MULTI PLAYER
  // Creating Many
  addMultiPlayer: async (req, res) => {
    try {
      const newPlayer = await Player.insertMany(req.body);
      res.status(201).json(newPlayer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // GET ALL PLAYER
  getAllPlayer: async (req, res) => {
    try {
      const players = await Player.find();
      res.status(200).json(players);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET A PLAYER
  getAPlayer: async (req, res) => {
    try {
      const player = await Player.findById(req.params.id);
      res.status(200).json(player);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  // UPDATE DATA PLAYER
  updatePlayer: async (req, res) => {
    try {
      const player = await Player.findById(req.params.id);
      await player.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!!!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE PLAYER
  deletePlayer: async (req, res) => {
    try {
      await Player.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!!!");
    } catch {
      res.status(500).json(err);
    }
  },
};

module.exports = playerController;
