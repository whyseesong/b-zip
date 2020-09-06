require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const busStopRouter = require("./routes/busStop");
const searchRouter = require("./routes/search");

const app = express();
const port = process.env.PORT || 4000;

const { MONGO_URL, MONGO_DATABASE, MONGO_USER_ID, MONGO_USER_PW } = process.env;

app.use(cors());
app.use(logger("dev"));
// static file service
app.use(express.static("public"));
// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// node.js native promise use
mongoose.Promise = global.Promise;

// connect mongoose
mongoose
  .connect(`mongodb://${MONGO_URL}/${MONGO_DATABASE}`, {
    auth: { authSource: "admin" },
    user: MONGO_USER_ID,
    pass: MONGO_USER_PW,
    useNewUrlParser: true,
  })
  .then(() => console.log("Successfully connected to mongoDB!"))
  .catch((e) => console.error.bind(console, "connection error: "));

// routes
app.use("/busStop", busStopRouter);
app.use("/search", searchRouter);

// listen server
app.listen(port, () => console.log(`Server listening on port ${port}`));
