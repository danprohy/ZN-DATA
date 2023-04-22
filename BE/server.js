const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const playerRoute = require("./routes/player.route");
const authRoute = require("./routes/auth.route");
const userManageRoute = require("./routes/userManagePlayer.route");
// const { options } = require("./routes/player.route");



dotenv.config();
// var corsOptions = {
//   origin: "http://localhost:8081",
// };

app.use(express.json());
app.use(morgan("common"));
// cors , tranh lo be va fe dung 2 port khac nhau
app.use(cors());
// app.use(cors(corsOptions));

//ROUTES
app.use("/auth", authRoute);
app.use("/v1/player", playerRoute);
app.use("/user/player", userManageRoute);

// SEVER RUNNING
const PORT = process.env.PORT || 1705;
app.listen(PORT, async () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
// CONNECT DATABASE
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL1, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database!");
    // await mongoose.connect(process.env.MONGODB_URL1, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // console.log("Connected to the database2!");
  } catch (err) {
    console.log("Cannot connect to the database!", err);
    process.exit(1);
  }
};

connectDB();
