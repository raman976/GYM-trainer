// require('dotenv').config()
// const BMI=require('../Model/BMI')

// const analyseBMI=async(req,res)=>{
//     try{
//         const {height,weight,gender,age}=req.body 
//         const response = await fetch(
//             "https://openrouter.ai/api/v1/chat/completions",
//             {
//               method: "POST",
//               headers: {
//                "Authorization": `Bearer ${process.env.R10.trim()}`,
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 model: "deepseek/deepseek-r1-zero:free",
//                 messages: [
//                   {
//                     role: "system",
//                     content:
//                       "You are a professional fitness trainer.Given are the values of person's height,weight,gender,age.Give the analysis of person's Body Mass Index and body fat percentage in no more than 60 words.",
//                   },
//                   {
//                     role: "user",
//                     content: `give me an analysis of my body mass index and body fat percentage, my height is ${height} cm,weight is ${weight} kg,gender is ${gender},age is ${age} years`,
//                   },
//                 ],
//               }),
//             }
//           );
      
//           const data = await response.json();


//           if (!data.choices || data.choices.length === 0 || !data.choices[0].message) {
//             return res.status(500).json({
//                 success: false,
//                 message: "AI response was empty or invalid.",
//             });
//         }


//           const analysis = data.choices[0].message.content;

//         const summary=new BMI({
//             height,
//             weight,
//             gender,
//             age,
//             analysis:analysis
//         })
//         await summary.save();
//         res.status(200).json({
//             success:true,
//             message:'analysis generated successfully',
//             analysis:analysis
//         })
      
//     }
//     catch(error){

//         console.log("error",error)
//         res.status(500).json({
//             success:false,
//             message:'there was a problem generating your analysis ,please retry'
//         })
//     }
// }

// module.exports={analyseBMI}





require('dotenv').config();
const BMI = require('../Model/BMI');
const User = require('../Model/User');

const analyseBMI = async (req, res) => {
  try {
    const userId = req.user.id;
    const { height, weight, gender, age } = req.body;

    if (!height || !weight || !gender || !age) {
      return res.status(400).json({ success: false, message: "All fields are required" });
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
              content:
                "You are a professional fitness trainer. Given are the values of a person's height, weight, gender, and age. Give the analysis of the person's Body Mass Index and body fat percentage in no more than 60 words.",
            },
            {
              role: "user",
              content: `Give me an analysis of my body mass index and body fat percentage, my height is ${height} cm, weight is ${weight} kg, gender is ${gender}, age is ${age} years.`,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!data.choices || data.choices.length === 0 || !data.choices[0].message) {
      return res.status(500).json({
        success: false,
        message: "AI response was empty or invalid.",
      });
    }

    const analysis = data.choices[0].message.content;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.bmiplanId) {
      await BMI.findByIdAndUpdate(user.bmiplanId, {
        height,
        weight,
        gender,
        age,
        analysis,
      });

      return res.status(200).json({
        success: true,
        message: "BMI analysis updated",
        analysis,
      });
    } else {
      const summary = new BMI({
        height,
        weight,
        gender,
        age,
        analysis,
      });

      await summary.save();
      user.bmiplanId = summary._id;
      await user.save();

      return res.status(200).json({
        success: true,
        message: "BMI analysis generated successfully",
        analysis,
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "There was a problem generating your analysis, please retry",
    });
  }
};

const getBMIAnalysis = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("bmiplanId");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.bmiplanId) {
      return res.status(404).json({ success: false, message: "No BMI analysis found for this user" });
    }

    return res.status(200).json({
      success: true,
      message: "BMI analysis retrieved successfully",
      analysis: user.bmiplanId.analysis,
    });
  } catch (error) {
    console.error("Error fetching BMI analysis:", error);
    return res.status(500).json({ success: false, message: "Server error, please try again" });
  }
};

module.exports = { analyseBMI, getBMIAnalysis };