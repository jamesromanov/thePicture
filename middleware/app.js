const express = require("express");
const router = require("../routes/file.router");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
module.exports = app;
