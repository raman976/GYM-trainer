const mongoose=require('mongoose')
const workoutPlannerSchema=new mongoose.Schema({
    days: {type:Number,required:true},
    goal:{type:String,required:true},
    equipment:{type:String,required:true},
    plan: { type: String, required: true }
})

const Workout = mongoose.model("Workout", workoutPlannerSchema);
module.exports = Workout;
