import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send(
    "This is a/the looooong message intended to be sent in the root of the server!"
  );
});

app.listen(port, () => {
  console.log("server is up and running in port:" + port);
});
