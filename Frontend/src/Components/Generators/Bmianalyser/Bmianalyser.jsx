import React, { useEffect, useState } from "react";
import { marked } from "marked";

const Bmianalyser = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  // Fetch existing BMI analysis
  useEffect(() => {
    async function fetchBMI() {
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/analyse/get", {
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

  // Generate new BMI analysis
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
      const res = await fetch("http://localhost:3000/analyse/generate", {
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
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Body Mass Index (BMI) Analyzer</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {analysis && (
        <div style={{ background: "#f8f8f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
          <h2>Your Last BMI Analysis:</h2>
          <div
            style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
            dangerouslySetInnerHTML={{ __html: marked.parse(analysis) }}
          />
        </div>
      )}

      <form onSubmit={generateBMI} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#007bff",
            color: "#fff",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Generate BMI Analysis"}
        </button>
      </form>
    </div>
  );
};

export default Bmianalyser;