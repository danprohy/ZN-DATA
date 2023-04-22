const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const db2 = mongoose.createConnection(process.env.MONGODB_URL1);
// const { Player } = require("./player");
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
});

// let User = db2.model("User", userSchema);  // Dung de connect den datasbase thu 2
let User = mongoose.model("User", userSchema);
module.exports = { User };
