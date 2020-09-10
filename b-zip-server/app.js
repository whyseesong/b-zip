require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import logger from "morgan";
import cors from "cors";

import busStopRouter from "./routes/busStop";
import searchRouter from "./routes/search";

const app = express();
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
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongoDB!"))
  .catch((e) => console.error.bind(console, "connection error: "));

// routes
app.use("/busStop", busStopRouter);
app.use("/search", searchRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  let apiError = err;
  if (!err.status) {
    apiError = createError(err);
  }
  res.locals.message = apiError.message;
  res.locals.error = process.env.NODE_ENV === "development" ? apiError : {};
  return res.status(apiError.status).json({ message: apiError.message });
});

module.exports = app;
