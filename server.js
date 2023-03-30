const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const playerRoute = require("./routes/player.route");
const authRoute = require("./routes/auth.route");
const userManageRoute = require("./routes/userManagePlayer.route");
const { options } = require("./routes/player.route");

dotenv.config();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("common"));
app.use(cors());

//ROUTES
app.use("/auth", authRoute);
app.use("/v1/player", playerRoute);
app.use("/user", userManageRoute);

// SEVER RUNNING
const PORT = process.env.PORT || 1705;
app.listen(PORT, async () => {
  console.log(`Sever is running on PORT ${PORT}...`);
});
// CONNECT DATABASE
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL1, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database1!");
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
