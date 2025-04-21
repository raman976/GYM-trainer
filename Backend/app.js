const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/Auth");
const cors=require("cors");
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "OPTIONS"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
}));
app.options("*", cors())
app.use(express.json());
app.use("/auth", authRoutes);

const workoutRoutes = require("./Routes/WorkRoutes");
app.use("/workout", workoutRoutes);


const dietRoutes=require('./Routes/DietRoutes');
app.use('/dietplan',dietRoutes)

const bmiRoutes=require('./Routes/BMIRoute')
app.use('/analyse', bmiRoutes);


async function connectDB() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
app.use("/", (req, res, next) => {
  res.status(200).json({
    message: "the server is working",
  });
});
connectDB();
app.use(express.json());
module.exports = app;

