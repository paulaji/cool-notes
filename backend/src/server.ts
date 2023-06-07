import "dotenv/config";
import env from "./util/validateEnv";
import mongoose from "mongoose";
import express from "express";
const app = express();
const port = env.PORT;

app.get("/", (req, res) => {
  res.send(
    "This is a/the looooong message intended to be sent in the root of the server!"
  );
});

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("mongoose connection was successful");
    app.listen(port, () => {
      console.log("server is up and running in port:" + port);
    });
  })
  .catch(console.error);
