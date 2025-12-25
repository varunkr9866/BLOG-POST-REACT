import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";


const app = express();

// middleware
app.use(express.json());

// FIXED ROUTE
app.use("/api/user", router);

mongoose
  .connect("mongodb://localhost:27017/Blog")
  .then(() => {
    app.listen(5000);
    console.log("Connected to MongoDB and listening on port 5000");
  })
  .catch((err) => console.log(err));
