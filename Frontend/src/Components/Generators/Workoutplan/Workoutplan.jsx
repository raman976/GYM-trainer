import React, { useState, useEffect } from "react";
import { marked } from "marked";

const WorkoutPlanner = () => {
  const [days, setDays] = useState("");
  const [goal, setGoal] = useState("");
  const [equipment, setEquipment] = useState(""); // Comma-separated string
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  // Fetch stored workout plan on component mount
  useEffect(() => {
    async function fetchStoredWorkoutPlan() {
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }


      console.log("Sending to AI:", {
        days, goal, equipment,
      });
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

  // Function to fetch a new workout plan
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
          equipment: equipment.split(",").map((item) => item.trim()), // Convert to array
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

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Generate a Workout Plan</h1>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display last workout plan with markdown formatting */}
      {workoutPlan && (
        <div style={{ background: "#f8f8f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
          <h2 style={{ marginBottom: "10px" }}>Your Last Workout Plan:</h2>
          <div
            style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
            dangerouslySetInnerHTML={{
              __html: marked.parse(workoutPlan.plan, { gfm: true }),
            }}
          />
        </div>
      )}

      {/* Workout Plan Form */}
      <form onSubmit={fetchWorkoutPlan} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="number"
          placeholder="Workout Days per Week"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
          min="1"
          max="7"
        />
        <input
          type="text"
          placeholder="Goal (e.g., Muscle Gain, Fat Loss)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Equipment (comma-separated, e.g., Dumbbells, Barbell)"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        />
        <button type="submit" disabled={loading} style={{ background: "#007bff", color: "#fff", padding: "10px", border: "none", cursor: "pointer" }}>
          {loading ? "Generating..." : "Generate Workout Plan"}
        </button>
      </form>
    </div>
  );
};

export default WorkoutPlanner;
