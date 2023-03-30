const { UserPlayer } = require("../model/userManagePlayer");

const userPlayerController = {
  // user/post
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
        post: newPlayer,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
};

module.exports = userPlayerController;
