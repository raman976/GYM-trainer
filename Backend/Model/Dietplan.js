const mongoose=require('mongoose')

const DietPlanSchema=new mongoose.Schema({
    goal:{type:String,required:true},
    height:{type:Number,required:true},
    weight:{type:Number,required:true},
    preference:{type:String,required:true},
    plan:{type:String,required:true}
})

const DietPlan=mongoose.model('DietPlan',DietPlanSchema)
module.exports=DietPlan