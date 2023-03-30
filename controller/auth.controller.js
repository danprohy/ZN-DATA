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
      res.json({ success: true, message: "User created successfully" });
    } catch (err) {}
  },
};

module.exports = userController;
