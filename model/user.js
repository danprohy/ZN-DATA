const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const db2 = mongoose.createConnection(process.env.MONGODB_URL2);
const { Player } = require("./player");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  //   manage: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Player'
  //   }
});

let User = db2.model("User", userSchema);
module.exports = { User };
