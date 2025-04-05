
// const workoutPlannerSchema=new mongoose.Schema({
//     days: {type:Number,required:true},
//     goal:{type:String,required:true},
//     equipment:{type:String,required:true},
//     plan: { type: String, required: true }
// })


const mongoose=require('mongoose')
const workoutPlannerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // 👈 Add this
    days: { type: Number, required: true },
    goal: { type: String, required: true },
    equipment: { type: [String], required: true },
    plan: { type: String, required: true }
  });
const WorkoutPlan = mongoose.model("WorkoutPlan", workoutPlannerSchema);
module.exports = WorkoutPlan;
