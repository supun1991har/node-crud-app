const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello from API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://supunfit:124028T@bakenddb.6wxf2ah.mongodb.net/?retryWrites=true&w=majority&appName=BakendDB"
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("Server is Running");
    });
    console.log("connectd to database!");
  })
  .catch((error) => {
    console.log(error);
    console.log("connection failed!");
  });
