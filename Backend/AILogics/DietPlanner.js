require('dotenv').config();
const User = require("../Model/User");
const DietPlan = require('../Model/Dietplan');

const generateDietPlan = async (req, res) => {
  try {
    const userId = req.user.id;
    const { goal, height, weight, preference } = req.body;

    if (!goal || !height || !weight || !preference) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.R10.trim()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-zero:free",
          messages: [
            {
              role: "system",
              content: "You are a professional fitness trainer. Generate a structured diet plan based on user input.",
            },
            {
              role: "user",
              content: `Create a diet plan for me, my current height is ${height} cm, my current weight is ${weight} kg, my food preference is ${preference}, and I have to achieve ${goal}. dont use the reference of previous conversation give a listed plan not so long not so short`,
            },
          ],
        }),
      }
    );

    console.log("API Key:", process.env.R10);

    const data = await response.json();
    console.log('checking data', data);

    const dietPlanMarkdown = data.choices[0].message.content;

    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.dietPlanId) {
      await DietPlan.findByIdAndUpdate(user.dietPlanId, {
        plan: dietPlanMarkdown,
      });
      return res.status(200).json({
        message: "Diet plan updated",
        plan: dietPlanMarkdown,
      });
    } else {
      const plan = new DietPlan({
        goal,
        height,
        weight,
        preference,
        plan: dietPlanMarkdown,
      });
      await plan.save();
      user.dietPlanId = plan._id;
      await user.save();
      return res.status(200).json({
        success: true,
        message: 'Plan generated successfully',
        plan: dietPlanMarkdown,
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      message: 'There was a problem generating your plan, please retry',
    });
  }
};

const getDietPlan = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate("dietPlanId");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.dietPlanId) {
      return res.status(404).json({ success: false, message: "No diet plan found for this user" });
    }

    return res.status(200).json({
      success: true,
      message: "Diet plan retrieved successfully",
      plan: user.dietPlanId.plan,
    });
  } catch (error) {
    console.error("Error fetching diet plan:", error);
    return res.status(500).json({ success: false, message: "Server error, please try again" });
  }
};

module.exports = { generateDietPlan, getDietPlan };