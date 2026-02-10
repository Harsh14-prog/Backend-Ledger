require("dotenv").config()
const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("server connected to database")
      })
      .catch((err) => {
        console.log("error occured while connecting to database")
        process.getMaxListeners(1)
      })
} 

module.exports = connectDB
