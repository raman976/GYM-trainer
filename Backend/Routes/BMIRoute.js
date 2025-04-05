// const express = require("express");
// const { analyseBMI } = require("../AILogics/BMIanalyser");
// const router = express.Router();

// router.post("/generate", analyseBMI);

// module.exports = router;
const authMiddleware = require("../MiddleWare/AuthMiddleWare");


const express = require("express");
const { analyseBMI, getBMIAnalysis } = require("../AILogics/BMIanalyser");
const router = express.Router();

// Route to generate or update BMI analysis
router.post("/generate", authMiddleware,analyseBMI);

// Route to fetch existing BMI analysis
router.get("/get", authMiddleware,getBMIAnalysis);

module.exports = router;
