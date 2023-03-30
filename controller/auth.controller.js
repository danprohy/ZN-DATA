const { User } = require("../model/user");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const userController = {
  // REGISTER
  // Route: auth/register
  // Access: public
  register: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({ success: false, message: "Missing username or/and password" });

    try {
      // Check existing user
      const user = await User.findOne({ username: username });

      if (user)
        return res
          .status(400)
          .json({ success: false, message: "Username has already existed" });
      // All good
      const hashedPassword = await argon2.hash(password);
      const newUser = new User({
        username: username,
        password: hashedPassword,
      });
      await newUser.save();

      // Res access TOKEN
      const accessToken = jwt.sign(
        { userID: newUser._id },
        process.env.ACCESS_TOKEN_SECRET
      ); // Let userID = id
      res.json({
        success: true,
        message: "User created successfully",
        accessToken,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  // LOGIN
  // Route: auth/login
  // Access: public
  login: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing username and/or password" });
    }
    try {
      // Check for existing user
      const user = await User.findOne({ username: username });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect username or password" });
      }
      // Username found
      const passwordValid = await argon2.verify(user.password, password);
      if (!password) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect username or password" });
      }
      // All good
      // Res token
      const accessToken = jwt.sign(
        {
          userID: user._id,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({ success: true, message: "Login successfully", accessToken });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Sever error" });
    }
  },
};

module.exports = userController;
