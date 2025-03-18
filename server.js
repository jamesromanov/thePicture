const env = require("dotenv").config();
const mongoose = require("mongoose");
const { connectDb } = require("./config/db");
const app = require("./middleware/app");
connectDb();
app.listen(process.env.PORT, () => {
  console.log("Server is running on:", process.env.PORT);
});
