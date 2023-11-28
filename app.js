const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Importing Mongoose Connection and calling it
const db = require("./config/mongoose");

// Using urlEncoded to update get the form data
app.use(express.urlencoded({ extended: true }));

// Providing the routes path
app.use("/products", require("./routes/products"));

// Listening the application on given port
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
