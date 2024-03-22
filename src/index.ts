import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import PostRouter from "./Routes/Post.routes";
import AuthRouter from "./Routes/Auth.routes";
const app = express();

app.use(express.json());
app.use("/posts", PostRouter);
app.use(AuthRouter);

const uri = process.env.MONGODB_URL as string;
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const Port = 4000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
