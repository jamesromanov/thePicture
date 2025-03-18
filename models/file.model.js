const { default: mongoose } = require("mongoose");

let file = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  image: { type: String },
});

let fileModel = mongoose.model("files", file);

module.exports = fileModel;
