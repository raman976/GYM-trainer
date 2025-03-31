require("dotenv").config();
const WorkoutPlan = require("../Model/Workoutplan");
const generateWorkoutPlan = async (req, res) => {
  try {
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

    const newWorkout = new WorkoutPlan({
    days,
      goal,
      equipment,
      plan: workoutPlanMarkdown, 
    });
    await newWorkout.save();

    res.status(200).json({
      success: true,
      message: "Workout plan generated successfully!",
      workoutPlan: workoutPlanMarkdown 
    });

  } catch (error) {
    console.error("Error generating workout:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { generateWorkoutPlan };
