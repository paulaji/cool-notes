import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("mongoose connection was successful");
    app.listen(port, () => {
      console.log("server is up and running in port:" + port);
    });
  })
  .catch(console.error);
