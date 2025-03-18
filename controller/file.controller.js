const { file } = require("make/src/util");
const fileModel = require("../models/file.model");

let readDb = async (req, res, next) => {
  let clusters = await fileModel.find();
  res.json(clusters);
};
let addDb = async (req, res, next) => {
  let file = new fileModel();

  file.name = req.body.name;
  file.age = req.body.age;
  console.log(req.file);
  file.image = req.body.image;
  await file.save();
  res.json(file);
};
module.exports = { readDb, addDb };
