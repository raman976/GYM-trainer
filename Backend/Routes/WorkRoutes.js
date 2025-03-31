const express = require("express");
const { generateWorkoutPlan } = require("../AILogics/WorkoutPlanner");
const router = express.Router();

router.post("/generate", generateWorkoutPlan);

module.exports = router;
