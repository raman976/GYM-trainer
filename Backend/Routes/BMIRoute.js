const express = require("express");
const { analyseBMI } = require("../AILogics/BMIanalyser");
const router = express.Router();

router.post("/generate", analyseBMI);

module.exports = router;
