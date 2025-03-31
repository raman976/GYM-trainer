const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  workoutPlanId: { type: mongoose.Schema.Types.ObjectId, ref: "Workout" },
  dietPlanId: { type: mongoose.Schema.Types.ObjectId, ref: "DietPlan" }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
