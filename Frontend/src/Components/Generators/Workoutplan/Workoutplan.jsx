import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { StyledHeaderContainer, StyledPageWrapper,StyledHeader ,StyledSubHeader, StyledFormContainer,StyledForm,StyledInput,StyledButton,StyledResultSection,MarkdownWrapper} from "./StyledWorkoutPlan";

import Footer from "../../Dashboard/Footer";

const WorkoutPlanner = () => {
  const [days, setDays] = useState("");
  const [goal, setGoal] = useState("");
  const [equipment, setEquipment] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchStoredWorkoutPlan() {
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("https://gym-trainer-production.up.railway.app/workout/plan", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch workout plan. Status: ${response.status}`);
        }

        const data = await response.json();
        
        setWorkoutPlan(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStoredWorkoutPlan();
  }, [token]);

  async function fetchWorkoutPlan(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!token) {
      setError("Authentication error: Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://gym-trainer-production.up.railway.app/workout/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          days: Number(days),
          goal,
          equipment: equipment.split(",").map((item) => item.trim()),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to generate workout plan: ${errorText}`);
      }

      const data = await response.json();
      setWorkoutPlan(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  
console.log(workoutPlan)
  return (
    <div style={{background:"black"}}>
    <StyledPageWrapper>
      <StyledHeaderContainer>
      <StyledHeader>AI Workout Plan Generator</StyledHeader>
      <StyledSubHeader>
      Create your personalized workout plan powered by AI. Input your preferences below and get a customized routine that matches your goals and equipment availability.
      </StyledSubHeader>
      </StyledHeaderContainer>

      <StyledFormContainer>
        <StyledForm onSubmit={fetchWorkoutPlan}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-start",gap:"3%",width:"100%",marginTop:"7%"}}><svg
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
                borderRadius: "30%",
                display: "inline-block",
              }}
            >
              <path d="M14.4 14.4 9.6 9.6" />
              <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
              <path d="m21.5 21.5-1.4-1.4" />
              <path d="M3.9 3.9 2.5 2.5" />
              <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
            </svg>
          <h2 style={{color:'#F97316',fontSize:"3.2vh",marginBottom:"2.3vh"}}>Customize Your Plan</h2></div>
              <div style={{display:"flex",flexDirection:"column",gap:"3vh",width:"100%",justifyContent:"center",alignItems:"center"}}>
          <StyledInput
            type="number"
            placeholder="Workout Days per Week"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
            min="1"
            max="7"
          />
          <StyledInput 
            type="text"
            placeholder="Goal (e.g., Muscle Gain)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
          <StyledInput
            type="text"
            placeholder="Equipment (e.g., Dumbbells, Barbell)"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
          <StyledButton type="submit" disabled={loading} >
            {loading ? "Generating..." : "Generate Workout Plan"}
          </StyledButton>
          <hr style={{width:"89%",height:"0.01px",color:"#404040"}} />
          <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",width:"100%"}}>
            <h3 style={{color:"#E06713",marginLeft:"10%",marginBottom:"3%"}}>Features</h3>
            <ul style={{color:"#9CA3AF",marginLeft:"14%"}}>
              <li style={{ marginBottom: '10px' }}>Personalized workout</li>
              <li style={{ marginBottom: '10px' }}>Equipment-based exercises</li>
              <li style={{ marginBottom: '10px' }}>Goal-specific routines</li>
              <li style={{ marginBottom: '10px' }}>Progressive overload focus</li>
            </ul>
          </div>
          </div>
        </StyledForm>
        <StyledResultSection>
          <h2 style={{ marginBottom: "10px",marginTop:"2.1%",fontSize:"3.2vh",color:"#F97316"}}>
            {workoutPlan ? "Your Personalised Plan" : "No Workout Plan Available"}
          </h2>
          {workoutPlan ? (
            <MarkdownWrapper
              
              
              dangerouslySetInnerHTML={{
                __html: marked.parse(workoutPlan.plan, { gfm: true }),
              }}
            />
          ) : (
            <p style={{ color: "#555" }}>Generate a plan to see it here.</p>
          )}
        </StyledResultSection>
      </StyledFormContainer>
    </StyledPageWrapper>
    <Footer/>
    </div>
  );
};

export default WorkoutPlanner;