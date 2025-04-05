const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/Auth");
const cors=require("cors");
app.use(cors({
  origin: "http://localhost:5173", // Allow frontend to access backend
  methods: ["GET", "POST", "OPTIONS"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Ensure Authorization header is allowed
  credentials: true, // Allow cookies & authentication headers
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




// const express = require("express");
// require("dotenv").config();
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // ✅ Use a wider CORS configuration to avoid issues
// app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // Allow all origins (change if needed)
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(204);
//   }
//   next();
// });

// // ✅ Middleware to log requests for debugging
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

// // ✅ Enable JSON Parsing
// app.use(express.json());

// // ✅ Import Routes
// const authRoutes = require("./Routes/Auth");
// const workoutRoutes = require("./Routes/WorkRoutes");
// const dietRoutes = require("./Routes/DietRoutes");
// const bmiRoutes = require("./Routes/BMIRoute");

// // ✅ Register Routes
// app.use("/auth", authRoutes);
// app.use("/workout", workoutRoutes);
// app.use("/dietplan", dietRoutes);
// app.use("/analyse", bmiRoutes);

// // ✅ Connect to MongoDB
// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     process.exit(1);
//   }
// }
// connectDB();

// // ✅ Root route
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "🚀 The server is working" });
// });

// // ✅ Catch-all 404 Route
// app.use((req, res) => {
//   res.status(404).json({ error: "❌ Route not found" });
// });

// // ✅ Export the app
// module.exports = app;
