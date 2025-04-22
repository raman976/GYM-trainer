import React, { useEffect, useState } from "react";
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

const Bmianalyser = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchBMI() {
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      setLoading(true);
      try {
        const res = await fetch("https://gym-trainer-production.up.railway.app/analyse/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch BMI analysis");

        const data = await res.json();
        setAnalysis(data.analysis);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBMI();
  }, [token]);

  async function generateBMI(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!token) {
      setError("Authentication error: Please log in.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://gym-trainer-production.up.railway.app/analyse/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ height, weight, gender, age }),
      });

      if (!res.ok) throw new Error("Failed to generate BMI analysis");

      const data = await res.json();
      setAnalysis(data.analysis);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <StyledPageWrapper>
        <StyledHeaderContainer>
          <StyledHeader>AI BMI Analyzer</StyledHeader>
          <StyledSubHeader>
            Find out your body mass index and understand its implications. Enter your details to analyze.
          </StyledSubHeader>
        </StyledHeaderContainer>

        <StyledFormContainer>
          <StyledForm onSubmit={generateBMI}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", gap: "3%", width: "100%", marginTop: "7%" }}>
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

              <h2 style={{ color: '#F97316', fontSize: "3.2vh", marginBottom: "2.3vh" }}>Enter Your Body Metrics</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "3vh", width: "100%", justifyContent: "center", alignItems: "center" }}>
              <StyledInput
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
              <StyledInput
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <StyledInput
                type="text"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <StyledInput
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <StyledButton type="submit" disabled={loading}>
                {loading ? "Analyzing..." : "Generate BMI Analysis"}
              </StyledButton>
              {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
            </div>
          </StyledForm>

          <StyledResultSection>
            <h2 style={{ marginBottom: "10px", marginTop: "2.1%", fontSize: "3.2vh", color: "#F97316" }}>
              {analysis ? "Your BMI Analysis" : "No Analysis Available"}
            </h2>
            {analysis ? (
              <MarkdownWrapper
                dangerouslySetInnerHTML={{ __html: marked.parse(analysis, { gfm: true }) }}
              />
            ) : (
              <p style={{ color: "#555" }}>Generate your BMI report to see it here.</p>
            )}
          </StyledResultSection>
        </StyledFormContainer>
      </StyledPageWrapper>
      <Footer />
    </div>
  );
};

export default Bmianalyser;
