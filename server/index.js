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
<<<<<<< HEAD
    console.log("connected to database!");
=======
    app.listen(3001, () => {
      console.log("Server is Running");
    });
    console.log("connectd to database!");
>>>>>>> b7235cf19577c1e687532387ada74981c921ad6b
  })
  .catch((error) => {
    console.log(error);
    console.log("connection failed!");
  });
