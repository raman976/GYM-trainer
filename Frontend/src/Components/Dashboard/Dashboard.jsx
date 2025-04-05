import React from "react";
import { Link} from "react-router-dom";
import { StyledCards, StyledCenteredDiv, StyledFeatureSection } from "./StyledDashboard";
import { StyledCardLeft } from "./StyledDashboard";

const Dashboard = () => {
  return (
    <>
      {/* <Link to="/dashboard/dietplanner">Diet Plan</Link>
      <Link to="/dashboard/workoutplan">Workout Plan</Link>
      <Link to="/dashboard/bmianalyser">BMI Analyzer</Link>
      <Link to="/dashboard/exercise">Exercise</Link> */}

      <StyledCenteredDiv>
  <StyledFeatureSection>
    <StyledCards to="/dashboard/dietplanner">
      <StyledCardLeft image='https://previews.123rf.com/images/thvideo/thvideo2303/thvideo230373201/200357704-icon-for-a-food-diary-diet-plan-with-a-linear-pictogram-of-fruits-on-a-clipboard-outline-icon-for.jpg'/>
      <div>
        <h2>Diet Plan</h2>
        <p>Get personalized diet plans</p>
      </div>
    </StyledCards>

    <StyledCards to="/dashboard/workoutplan">
      <StyledCardLeft image="https://static.vecteezy.com/system/resources/previews/010/941/449/non_2x/workout-exercise-cartoon-icon-illustration-sport-healthy-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" />
      <div>
        <h2>Workout Plan</h2>
        <p>Get personalized workout plans</p>
      </div>
    </StyledCards>

    <StyledCards to="/dashboard/bmianalyser">
      <StyledCardLeft image="https://img.freepik.com/free-vector/body-mass-index-weight-control-with-bmi-healthy-unhealthy-lifestyle-flat-vector-illustration-fitness-indicator-before-after-diet-overall-health-body-fat-scale-concept_88138-795.jpg?semt=ais_hybrid" />
      <div>
        <h2>BMI Analyzer</h2>
        <p>Calculate your BMI</p>
      </div>
    </StyledCards>

    <StyledCards to="/dashboard/exercise">
      <StyledCardLeft image="https://t4.ftcdn.net/jpg/05/28/44/63/240_F_528446389_QsejOENQ9mr2QzgXmOiqqMi7MdToJzVB.jpg" />
      <div>
        <h2>Exercise</h2>
        <p>Get exercise recommendations</p>
      </div>
    </StyledCards>
  </StyledFeatureSection>
</StyledCenteredDiv>



    </>
  );
};

export default Dashboard;
