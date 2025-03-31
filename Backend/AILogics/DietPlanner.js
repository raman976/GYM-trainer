require('dotenv').config()
const DietPlan=require('../Model/Dietplan')
const generateDietPlan=async(req,res)=>{
    try{
        const {goal,height,weight,preference}=req.body 
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
                      "You are a professional fitness trainer. Generate a structured diet plan based on user input.",
                  },
                  {
                    role: "user",
                    content: `Create a diet plan for me,my current height is ${height} cm,my current weight is ${weight} kg ,my food preference is ${preference} and i have to achieve ${goal}.`,
                  },
                ],
              }),
            }
          );
      
          const data = await response.json();
          const dietPlanMarkdown = data.choices[0].message.content;

        const plan=new DietPlan({
            goal,
            height,
            weight,
            preference,
            plan:dietPlanMarkdown
        })
        await plan.save()
        res.status(200).json({
            success:true,
            message:'plan generated successfully',
            plan:dietPlanMarkdown
        })
      
    }
    catch(error){

        console.log("error",error)
        res.status(500).json({
            success:false,
            message:'there was a problem generating youtr plan ,please retry'
        })
    }
}

module.exports={generateDietPlan}