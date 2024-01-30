// connection to database
require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDb;
