import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { StyledHeaderContainer, StyledPageWrapper,StyledHeader ,StyledSubHeader, StyledFormContainer,StyledForm} from "./StyledWorkoutPlan";

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
        const response = await fetch("http://localhost:3000/workout/plan", {
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
      const response = await fetch("http://localhost:3000/workout/generate", {
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
  // console.log(workoutPlan.plan)
  // const finaldata = workoutPlan.plan.replace(/\\boxed{([^}]*)}/g, "$1");
  
console.log(workoutPlan)
  return (
    <StyledPageWrapper>
      <StyledHeaderContainer>
      <StyledHeader>AI Workout Plan Generator</StyledHeader>
      <StyledSubHeader>
      Create your personalized workout plan powered by AI. Input your preferences below and get a customized routine that matches your goals and equipment availability.
      </StyledSubHeader>
      </StyledHeaderContainer>

      <StyledFormContainer>
        <StyledForm onSubmit={fetchWorkoutPlan} >
          <h2 style={styles.subheading}>Customize Your Plan</h2>
          <input
            type="number"
            placeholder="Workout Days per Week"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
            min="1"
            max="7"
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Goal (e.g., Muscle Gain)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Equipment (e.g., Dumbbells, Barbell)"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            style={styles.input}
          />
          <button type="submit" disabled={loading} style={{color:"black",fontWeight:"bold",fontSize:"16px",padding:"12px",backgroundColor:"#EBEDF1",border:"none",borderRadius:"6px",cursor:"pointer",marginTop:"10px"}}>
            {loading ? "Generating..." : "Generate Workout Plan"}
          </button>
        </StyledForm>
        {/* RIGHT: Workout Plan Display */}
        <div style={styles.resultSection}>
          <h2 style={{color: "black", marginBottom: "10px"}}>
            {workoutPlan ? "Your Workout Plan" : "No Workout Plan Available"}
          </h2>
          {workoutPlan ? (
            <div
              style={styles.planBox}
              
              dangerouslySetInnerHTML={{
                __html: marked.parse(workoutPlan.plan, { gfm: true }),
              }}
            />
          ) : (
            <p style={{ color: "#555" }}>Generate a plan to see it here.</p>
          )}
        </div>
      </StyledFormContainer>
    </StyledPageWrapper>
  );
};
const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    padding: "40px",
    backgroundColor: "#171A26",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#EAEAEA",
  },
  container: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  formSection: {
    flex: "1 1 300px",
    background: "linear-gradient(to right, #7F7FA0 50%, #A8B2C5 100%)",
    padding: "25px",
    borderRadius: "12px",
    // boxShadow: "0px 4px 15px rgba(56, 56, 56, 0.5)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    border: "1px solid #2A2A2A",
  },
  resultSection: {
    flex: "2 1 500px",
    background: "linear-gradient(to right, #7F7FA0, #A8B2C5)",
    padding: "25px",
    borderRadius: "12px",
    // boxShadow: "0px 4px 15px rgba(56, 56, 56, 0.5)",
    overflowY: "auto",
    maxHeight: "600px",
    border: "1px solid #2A2A2A",
  },
  subheading: {
    marginBottom: "10px",
    color: "#EBEDF1",
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#EBEDF1",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  planBox: {
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    color: "#333",
    lineHeight: "1.5",
  },
  error: {
    color: "red",
    marginBottom: "15px",
    textAlign: "center",
  },
};

export default WorkoutPlanner;
