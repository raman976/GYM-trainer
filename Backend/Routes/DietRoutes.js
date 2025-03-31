const express = require("express");
const { generateDietPlan } = require("../AILogics/DietPlanner");
const router = express.Router();

router.post("/generate", generateDietPlan);

module.exports = router;
