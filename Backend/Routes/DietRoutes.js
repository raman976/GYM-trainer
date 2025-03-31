const express = require("express");
const { generateDietPlan } = require("../AILogics/DietPlanner");
const authMiddleware = require("../MiddleWare/AuthMiddleWare");
const router = express.Router();

router.post("/generate",authMiddleware, generateDietPlan);

module.exports = router;
