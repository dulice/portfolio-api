require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoute = require("./route/projectRoute");
const uploadRoute = require("./route/upload");
const app = express();

app.use(cors());
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({extended: true}))

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/projects", projectRoute);
app.use("/api/upload", uploadRoute);
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
app.get("*", (req, res, next) => {
  res.status(200).json({message: "Hello world"})
})
