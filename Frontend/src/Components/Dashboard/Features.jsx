import React from "react";
import {
  StyledDashboardCard,
  StyledDashboardInnerWrapper,
  StyledDashboardOuterWrapper,
  StyledButton
} from "./StyledDashboard";

const Features = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StyledDashboardOuterWrapper>
        <h2 style={{ color: "white", fontWeight: "bold" }}>AI Fitness Tools</h2>
        <StyledDashboardInnerWrapper>
          <StyledDashboardCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="40"
              height="40"
              style={{
                backgroundColor: "#3D220F",
                padding: "8px",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <path d="M14.4 14.4 9.6 9.6" />
              <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
              <path d="m21.5 21.5-1.4-1.4" />
              <path d="M3.9 3.9 2.5 2.5" />
              <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
            </svg>
            <h3>AI Workout Generator</h3>
            <p>
              Get personalized workout plans based on your fitness level and
              goals.
            </p>
            <StyledButton to="/dashboard/workoutplan">Generate Workout</StyledButton>
          </StyledDashboardCard>
          <StyledDashboardCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="40"
              height="40"
              style={{
                backgroundColor: "#372C11",
                padding: "8px",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
              <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
              <path d="m2.1 21.8 6.4-6.3" />
              <path d="m19 5-7 7" />
            </svg>
            <h3>AI Diet Planner</h3>
            <p>
              Receive customized meal plans tailored to your dietary needs and
              preferences.
            </p>
            <StyledButton to="/dashboard/dietplanner">Plan Your Diet
</StyledButton>
          </StyledDashboardCard>
          <StyledDashboardCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                backgroundColor: "#11331E",
                padding: "8px",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M17 12h-2l-2 5-2-10-2 5H7"></path>
            </svg>

            <h3>AI BMI Analyzer</h3>
            <p>
              Track your Body Mass Index and get insights about your health
              status.
            </p>
            <StyledButton to="/dashboard/bmianalyser">Analyze BMI</StyledButton>
          </StyledDashboardCard>
          <StyledDashboardCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="40"
              height="40"
              style={{
                backgroundColor: "#16253C",
                padding: "8px",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
            <h3>Exercise Library</h3>
            <p>
              Browse through a vast collection of exercises with detailed
              instructions.
            </p>
            <StyledButton to="/dashboard/exercise">Explore Library    </StyledButton>
          </StyledDashboardCard>
        </StyledDashboardInnerWrapper>
      </StyledDashboardOuterWrapper>
    </div>
  );
};

export default Features;
