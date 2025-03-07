const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // Use MONGO_URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
