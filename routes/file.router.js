const express = require("express");
const multer = require("multer");
const path = require("path");
const { readDb, addDb } = require("../controller/file.controller");
const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "-" +
        Math.floor(Math.random() * 1000) +
        "-" +
        "user" +
        (path.extname(file.originalname) || file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname) == ".png") {
      cb(null, true);
    } else {
      cb(new Error("Please make sure filetype matches the .png!"));
    }
  },
});
router.route("/").get(readDb).post(upload.array("image"), addDb);
module.exports = router;
