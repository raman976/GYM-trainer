require("dotenv").config();
const User=require("../Model/User")
const WorkoutPlan = require("../Model/Workoutplan");
const generateWorkoutPlan = async (req, res) => {
  try {
    const userId = req.user.id;
    const { days, goal, equipment } = req.body;
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.R10}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-zero:free",
          messages: [
            {
              role: "system",
              content:
                "You are a professional fitness trainer. Generate a structured workout plan based on user input.",
            },
            {
              role: "user",
              content: `Create a workout plan for ${days} days for a  person aiming for ${goal}. Equipment available: ${equipment}.`,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const workoutPlanMarkdown = data.choices[0].message.content;

    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.workoutPlanId) {
      await WorkoutPlan.findByIdAndUpdate(user.workoutPlanId, {
        plan: workoutPlanMarkdown,
      });
      return res
        .status(200)
        .json({ message: "Workout plan updated", plan: workoutPlanMarkdown });
    } else {
      const newWorkout = new WorkoutPlan({
        userId,
        days,
        goal,
        equipment,
        plan: workoutPlanMarkdown,
      });
      await newWorkout.save();

      user.workoutPlanId = newWorkout._id;
      await user.save();

      return res
        .status(200)
        .json({ message: "Workout plan created", plan: workoutPlanMarkdown });
    }
  } catch (error) {
    console.error("Error generating workout:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { generateWorkoutPlan };
