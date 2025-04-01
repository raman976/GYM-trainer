const express = require("express");
const { generateWorkoutPlan,getWorkoutPlan } = require("../AILogics/WorkoutPlanner");
const authMiddleware = require("../MiddleWare/AuthMiddleWare");
const router = express.Router();

router.post("/generate",authMiddleware, generateWorkoutPlan);
router.get("/plan", authMiddleware, getWorkoutPlan);
module.exports = router;
