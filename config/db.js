const mongoose = require("mongoose");
const env = require("dotenv").config();

let connectDb = async () => {
  try {
    await mongoose
      .connect(
        process.env.DATABASE.replace("<db_password>", process.env.PASSWORD)
      )
      .then(() => console.log("mongoDb connected succesfully!"));
  } catch (error) {
    console.log("MongoDb connection error:", error);
  }
};

module.exports = { connectDb };
