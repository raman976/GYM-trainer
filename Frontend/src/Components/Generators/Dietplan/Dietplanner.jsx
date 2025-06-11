import React, { useState, useEffect } from "react";
import { marked } from "marked";
import {
  StyledHeaderContainer,
  StyledPageWrapper,
  StyledHeader,
  StyledSubHeader,
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledResultSection,
  MarkdownWrapper,
} from "../Workoutplan/StyledWorkoutPlan";

import Footer from "../../Dashboard/Footer";

const DietPlanner = () => {
  const [goal, setGoal] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [preference, setPreference] = useState("");
  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchStoredDietPlan() {
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("https://gym-trainer-dbh0.onrender.com/dietplan/plan", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
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
      const response = await fetch("https://gym-trainer-dbh0.onrender.com/dietplan/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
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
    <div style={{background:"black"}}>
      <StyledPageWrapper>
        <StyledHeaderContainer>
          <StyledHeader>AI Diet Plan Generator</StyledHeader>
          <StyledSubHeader>
            Get a personalized diet plan tailored to your goals and preferences. Fill in your details to begin.
          </StyledSubHeader>
        </StyledHeaderContainer>

        <StyledFormContainer>
          <StyledForm onSubmit={fetchDietPlan}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", gap: "3%", width: "100%", marginTop: "7%" }}>
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
              <h2 style={{ color: '#F97316', fontSize: "3.2vh", marginBottom: "2.3vh" }}>Customize Your Plan</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "3vh", width: "100%", justifyContent: "center", alignItems: "center" }}>
              <StyledInput
                type="text"
                placeholder="Goal (e.g., Weight Loss)"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              />
              <StyledInput
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                min="50"
              />
              <StyledInput
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                min="20"
              />
              <StyledInput
                type="text"
                placeholder="Dietary Preference (e.g., Vegan)"
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                required
              />
              <StyledButton type="submit" disabled={loading}>
                {loading ? "Generating..." : "Generate Diet Plan"}
              </StyledButton>
              {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
            </div>
          </StyledForm>

          <StyledResultSection>
            <h2 style={{ marginBottom: "10px", marginTop: "2.1%", fontSize: "3.2vh", color: "#F97316" }}>
              {dietPlan ? "Your Personalised Diet Plan" : "No Diet Plan Available"}
            </h2>
            {dietPlan ? (
              <MarkdownWrapper
                dangerouslySetInnerHTML={{
                  __html: marked.parse(dietPlan.plan, { gfm: true }),
                }}
              />
            ) : (
              <p style={{ color: "#555" }}>Generate a plan to see it here.</p>
            )}
          </StyledResultSection>
        </StyledFormContainer>
      </StyledPageWrapper>
      <Footer />
    </div>
  );
};

export default DietPlanner;
