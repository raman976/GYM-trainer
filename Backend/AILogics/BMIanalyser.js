require('dotenv').config()
const BMI=require('../Model/BMI')

const analyseBMI=async(req,res)=>{
    try{
        const {height,weight,gender,age}=req.body 
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
                      "You are a professional fitness trainer.Given are the values of person's height,weight,gender,age.Give the analysis of person's Body Mass Index and body fat percentage in no more than 60 words.",
                  },
                  {
                    role: "user",
                    content: `give me an analysis of my body mass index and body fat percentage, my height is ${height} cm,weight is ${weight} kg,gender is ${gender},age is ${age} years`,
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

        const summary=new BMI({
            height,
            weight,
            gender,
            age,
            analysis:analysis
        })
        await summary.save();
        res.status(200).json({
            success:true,
            message:'analysis generated successfully',
            analysis:analysis
        })
      
    }
    catch(error){

        console.log("error",error)
        res.status(500).json({
            success:false,
            message:'there was a problem generating your analysis ,please retry'
        })
    }
}

module.exports={analyseBMI}