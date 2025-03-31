const express = require("express");
const { generateWorkoutPlan } = require("../AILogics/WorkoutPlanner");
const authMiddleware = require("../MiddleWare/AuthMiddleWare");
const router = express.Router();

router.post("/generate",authMiddleware, generateWorkoutPlan);

module.exports = router;
