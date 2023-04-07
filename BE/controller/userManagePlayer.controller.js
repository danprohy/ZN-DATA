const { UserPlayer } = require("../model/userManagePlayer");

const userPlayerController = {
  // user/player
  // ADD PLAYER
  // Private
  addPlayer: async (req, res) => {
    const {
      long_name,
      player_positions,
      value_eur,
      age,
      dob,
      club_name,
      nationality_name,
      player_face_url,
    } = req.body;

    // Simple validation
    if (!long_name) {
      return res
        .status(400)
        .json({ success: false, message: "The name is required" });
    }
    try {
      const newPlayer = new UserPlayer({
        long_name,
        player_positions,
        value_eur,
        age,
        dob,
        club_name,
        nationality_name,
        player_face_url,
        user: req.userId,
      });

      await newPlayer.save();
      res.json({
        success: true,
        message: "Added successfully",
        player: newPlayer,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
  // user/player
  // GET Player
  // Private
  getPlayer: async (req, res) => {
    try {
      const players = await UserPlayer.find({ user: req.userId }).populate(
        "user",
        ["username"]
      ); // Ham populate, tra ve cac truong moc sang user model, bo truong password ra
      res.status(200).json({ success: true, players });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
  // user/player
  // UPDATE Player
  // Private
  updatePlayer: async (req, res) => {
    const {
      long_name,
      player_positions,
      value_eur,
      age,
      dob,
      club_name,
      nationality_name,
      player_face_url,
    } = req.body;

    // Simple validation
    if (!long_name) {
      return res
        .status(400)
        .json({ success: false, message: "The name is required" });
    }
    try {
      let updatePlayer = {
        long_name,
        player_positions: player_positions || "N/A",
        value_eur: value_eur || "N/A",
        age: age || "N/A",
        dob: dob || "N/A",
        club_name: club_name || "N/A",
        nationality_name: nationality_name || "N/A",
        player_face_url: player_face_url || "N/A",
      };

      const postUpdateCondition = { _id: req.params.id, user: req.userId }; // Dieu kien de co the Update
      updatePlayer = await UserPlayer.findOneAndUpdate(
        postUpdateCondition,
        updatePlayer,
        { new: true }
      ); // new: true, Update duoc se tra ve bien updatePlayer, neu ko update dc se tra ve gia tri cu

      // User not authorised to Update Player or Player not found
      if (!updatePlayer)
        res.status(401).json({
          success: false,
          message: "Player not found or User isn't authorised",
        });
      else
        res.status(200).json({
          success: true,
          message: "Updated successfully",
          player: updatePlayer,
        });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  // user/player
  // DELETE Player
  // Private
  deletePlayer: async (req, res) => {
    try {
      const deleteCondition = { _id: req.params.id, user: req.userId };
      const deletePlayer = await UserPlayer.findOneAndDelete(deleteCondition);

      // User isnt authorised or Player not found
      if (!deletePlayer)
        res.status(401).json({
          success: false,
          message: "Player not found or User isn't authorised",
        });
      else
        res.status(200).json({
          success: true,
          message: "Deleted successfully",
          player: deletePlayer,
        });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
};

module.exports = userPlayerController;
