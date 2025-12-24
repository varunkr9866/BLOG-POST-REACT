import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect("mongodb://localhost:27017/Blog")
  .then(() =>
    app
      .listen(5000))
      .then(() =>
        console.log("Connected to MongoDB and listening to port 5000")
      )
  .catch((err) => console.log(err));
