import React from "react";
import { Link} from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <Link to="/dashboard/dietplanner">Diet Plan</Link>
      <Link to="/dashboard/workoutplan">Workout Plan</Link>
      <Link to="/dashboard/bmianalyser">BMI Analyzer</Link>
      <Link to="/dashboard/exercise">Exercise</Link>
    </div>
  );
};

export default Dashboard;
