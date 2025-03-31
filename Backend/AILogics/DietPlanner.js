// require('dotenv').config()
// const User=require("../Model/User")
// const DietPlan=require('../Model/Dietplan')
// const generateDietPlan=async(req,res)=>{
//     try{
//       const userId = req.user.id;
//         const {goal,height,weight,preference}=req.body 
//         const response = await fetch(
//             "https://openrouter.ai/api/v1/chat/completions",
//             {
//               method: "POST",
//               headers: {
//                 "Authorization": `Bearer ${process.env.R10.trim()}`,
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 model: "deepseek/deepseek-r1-zero:free",
//                 messages: [
//                   {
//                     role: "system",
//                     content:
//                       "You are a professional fitness trainer. Generate a structured diet plan based on user input.",
//                   },
//                   {
//                     role: "user",
//                     content: `Create a diet plan for me,my current height is ${height} cm,my current weight is ${weight} kg ,my food preference is ${preference} and i have to achieve ${goal}.`,
//                   },
//                 ],
//               }),
//             }
//           );
//           console.log("API Key:", process.env.R10);

//           const data = await response.json();
//           console.log('checking data',data)
//           const dietPlanMarkdown = data.choices[0].message.content;

//           let user = await User.findById(userId);
//           if (!user) {
//             return res.status(404).json({ error: "User not found" });
//           }
      
//           if (user.dietPlanId) {
//             await DietPlan.findByIdAndUpdate(user.dietPlanId, {
//               plan: dietPlanMarkdown,
//             });
//             return res
//               .status(200)
//               .json({ message: "diet plan updated", plan: dietPlanMarkdown });
//           } else {
//             const plan=new DietPlan({
//               goal,
//               height,
//               weight,
//               preference,
//               plan:dietPlanMarkdown
//           })
//           await plan.save()
//           user.dietPlanId = plan._id;
//           await user.save();
//           res.status(200).json({
//               success:true,
//               message:'plan generated successfully',
//               plan:dietPlanMarkdown
//           })
        
//       }}
//     catch(error){

//         console.log("error",error)
//         res.status(500).json({
//             success:false,
//             message:'there was a problem generating youtr plan ,please retry'
//         })
//     }
// }

// module.exports={generateDietPlan}






require('dotenv').config();
const User = require("../Model/User");
const DietPlan = require('../Model/Dietplan');

const generateDietPlan = async (req, res) => {
  try {
    const userId = req.user.id;
    const { goal, height, weight, preference } = req.body;

    // Validate input
    if (!goal || !height || !weight || !preference) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Fetch AI-generated diet plan
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
              content: `Create a diet plan for me, my current height is ${height} cm, my current weight is ${weight} kg, my food preference is ${preference}, and I have to achieve ${goal}.`,
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

module.exports = { generateDietPlan };













