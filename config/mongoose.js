const mongoose = require("mongoose");

// connecting mongoose to its default server and ecommerceDB
mongoose.connect(
  "mongodb+srv://pradeepbhangi:12345@cluster0.1wxpsay.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
