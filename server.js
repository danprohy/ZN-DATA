const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const playerRoute = require("./routes/player");

// CONNECT DATABASE
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("common"));
app.use(cors());

//ROUTES
app.use("/v1/player", playerRoute);

app.listen(8000, () => {
  console.log("Sever is running...");
});
