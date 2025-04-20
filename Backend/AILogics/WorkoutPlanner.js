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
          model: "meta-llama/llama-4-maverick:free",
          messages: [
            {
              role: "system",
              content:
                "You are a professional fitness trainer. Generate a structured workout plan based on user input.",
            },
            {
              role: "user",
              content: `Create a workout plan for ${days} days for a person aiming for ${goal}. Equipment available: ${equipment}.

Please follow this **markdown formatting structure**:

1. Start with a short 2–3 line introductory paragraph about the workout plan.
2. For each day, use a bold header like **Day 1**, **Day 2**, etc.
3. Do NOT write any subheadings like "Push Exercises" or "Legs & Core" — skip that part completely.
4. For exercises:
   - Use a bullet point (-).
   - On the first line, write the **exercise name in bold followed by a colon** (e.g., **Push-up**:).
   - On the next line (separate line), write the **procedure** of how to do it and how long it should be performed (duration or sets/reps).
   - Avoid putting the procedure or timing on the same line as the exercise name.
5. Keep spacing **tight** — there should be **no blank lines** between the day heading and the first exercise, or between any exercises.

The final output should be clean and minimal markdown so it can be styled easily with CSS.`


,
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


const getWorkoutPlan = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate("workoutPlanId");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.workoutPlanId) {
      return res.status(404).json({
        success: false,
        message: "No workout plan found for this user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Workout plan retrieved successfully",
      plan: user.workoutPlanId.plan,
    });
  } catch (error) {
    console.error("Error fetching workout plan:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};

module.exports = { generateWorkoutPlan, getWorkoutPlan };

