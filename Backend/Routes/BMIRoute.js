
const authMiddleware = require("../MiddleWare/AuthMiddleWare");


const express = require("express");
const { analyseBMI, getBMIAnalysis } = require("../AILogics/BMIanalyser");
const router = express.Router();


router.post("/generate", authMiddleware,analyseBMI);


router.get("/get", authMiddleware,getBMIAnalysis);

module.exports = router;
