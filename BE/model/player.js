const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const db1 = mongoose.createConnection(process.env.MONGODB_URL1);
const Schema = mongoose.Schema;
const playerSchema = new Schema({
  long_name: {
    type: String,
    required: true,
  },
  player_positions: {
    type: [String],
  },
  value_eur: {
    type: Number,
  },
  age: {
    type: Number,
  },
  dob: {
    type: String,
  },
  club_name: {
    type: String,
  },
  nationality_name: {
    type: String,
  },
  player_face_url: {
    type: String,
    validate: {
      validator: function (v) {
        return /^https?:\/\//i.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },

  // Creat param user to manage private Player by Author
  user: {
    type: Schema.Types.ObjectId, // Get type is ID of User
    ref: "User", // reference to user in user.js
  },
});

//let Player = db1.model("Player", playerSchema);  // Dung de connect den datasbase thu 1
let Player = mongoose.model("Player", playerSchema);
module.exports = { Player };
