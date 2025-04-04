import React, { useState, useEffect } from "react";
import {marked} from "marked"

const Dietplanner = () => {
  const [goal, setGoal] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [preference, setPreference] = useState("");
  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  // Fetch stored diet plan on component mount
  useEffect(() => {
    async function fetchStoredDietPlan() {
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/dietplan/plan", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include", // 🔥 Allow authentication cookies
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch diet plan. Status: ${response.status}`);
        }

        const data = await response.json();
        setDietPlan(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStoredDietPlan();
  }, [token]);

  // Generate a new diet plan
  async function fetchDietPlan(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!token) {
      setError("Authentication error: Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/dietplan/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // 🔥 Required for authentication
        body: JSON.stringify({ goal, height, weight, preference }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to generate diet plan: ${errorText}`);
      }

      const data = await response.json();
      setDietPlan(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Generate a Diet Plan</h1>

      {/* Error message display */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display last diet plan */}
      {dietPlan && (
  <div style={{ background: "#f8f8f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
    <h2 style={{ marginBottom: "10px" }}>Your Last Diet Plan:</h2>
    <div
      style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      dangerouslySetInnerHTML={{
        __html: (marked.parse(dietPlan.plan, { gfm: true })),
      }}
    />
  </div>
)}


      {/* Diet Plan Form */}
      <form onSubmit={fetchDietPlan} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Goal (e.g., Weight Loss)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          min="50"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          min="20"
        />
        <input
          type="text"
          placeholder="Dietary Preference (e.g., Vegan)"
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
          required
        />
        <button type="submit" disabled={loading} style={{ background: "#007bff", color: "#fff", padding: "10px", border: "none", cursor: "pointer" }}>
          {loading ? "Generating..." : "Generate New Diet Plan"}
        </button>
      </form>
    </div>
  );
};

export default Dietplanner;
