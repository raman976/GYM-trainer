import React from "react";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import Workoutplan from "./Components/Generators/Workoutplan/Workoutplan";
import Dietplanner from "./Components/Generators/Dietplan/Dietplanner";
import Bmianalyser from "./Components/Generators/Bmianalyser/Bmianalyser";
import Exercise from "./Components/Generators/Exercises/Exercise";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoutes from "./Components/Authentication/PrivateRoutes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "white" }}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/dietplanner" element={<Dietplanner />} />
          <Route path="/dashboard/workoutplan" element={<Workoutplan />} />
          <Route path="/dashboard/bmianalyser" element={<Bmianalyser />} />
          <Route path="/dashboard/exercise" element={<Exercise />} />
        </Route>

        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
