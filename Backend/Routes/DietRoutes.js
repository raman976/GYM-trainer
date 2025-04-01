const express = require("express");
const { generateDietPlan,getDietPlan } = require("../AILogics/DietPlanner");
const authMiddleware = require("../MiddleWare/AuthMiddleWare");
const router = express.Router();

router.post("/generate",authMiddleware, generateDietPlan);
router.get("/plan", authMiddleware, getDietPlan);
module.exports = router;
