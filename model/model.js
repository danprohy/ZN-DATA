const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  long_name: {
    type: String,
    required: true,
  },
  player_positions: {
    type: [String],
    required: false,
  },
  value_eur: {
    type: Number,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  club_name: {
    type: String,
    required: false,
  },
  nationality_name: {
    type: String,
    required: false,
  },
  player_face_url: {
    type: String,
    validate: {
      validator: function (v) {
        return /^https?:\/\//i.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
    required: false,
  },
});

let Player = mongoose.model("Player", playerSchema);
module.exports = { Player };
