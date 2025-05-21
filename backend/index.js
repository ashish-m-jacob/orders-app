//importing and using express
const express = require("express");
const app = express();

//importing cors and allowing all requests
const cors = require("cors");
app.use(cors());

//importing mongoose
const mongoose = require("mongoose");

//importing and setting up bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // To parse JSON request
app.use(bodyParser.urlencoded({ extended: true })); //To parse form data

//importing customerRoutes
const customerRoutes = require("./routes/customer");

//importing and configuring dotenv
const env = require("dotenv");
env.config();

//import routes here

//import middlewares here (requestLogger, responseLogger, errorHandler)

//assign port value
const port = process.env.PORT || 8080;

//Home route setup
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running",
  });
});

//Setting up customer routes
app.use("/customer", customerRoutes);

//Add errorHandler middleware if needed

//running server on the selected port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);

  //connecting to database
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Successfully connected to database`);
    })
    .catch((err) => {
      console.log(err);
    });
});
