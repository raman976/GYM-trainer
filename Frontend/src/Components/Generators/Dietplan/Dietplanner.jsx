// import React, { useState, useEffect } from "react";
// import {marked} from "marked"

// const Dietplanner = () => {
//   const [goal, setGoal] = useState("");
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [preference, setPreference] = useState("");
//   const [dietPlan, setDietPlan] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const token = localStorage.getItem("token");

//   // Fetch stored diet plan on component mount
//   useEffect(() => {
//     async function fetchStoredDietPlan() {
//       if (!token) {
//         setError("No token found. Please log in.");
//         return;
//       }

//       setLoading(true);
//       try {
//         const response = await fetch("http://localhost:3000/dietplan/plan", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           credentials: "include", // 🔥 Allow authentication cookies
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to fetch diet plan. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setDietPlan(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchStoredDietPlan();
//   }, [token]);

//   // Generate a new diet plan
//   async function fetchDietPlan(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     if (!token) {
//       setError("Authentication error: Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/dietplan/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         credentials: "include", // 🔥 Required for authentication
//         body: JSON.stringify({ goal, height, weight, preference }),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Failed to generate diet plan: ${errorText}`);
//       }

//       const data = await response.json();
//       setDietPlan(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
//       <h1>Generate a Diet Plan</h1>

//       {/* Error message display */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Display last diet plan */}
//       {dietPlan && (
//   <div style={{ background: "#f8f8f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
//     <h2 style={{ marginBottom: "10px" }}>Your Last Diet Plan:</h2>
//     <div
//       style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
//       dangerouslySetInnerHTML={{
//         __html: (marked.parse(dietPlan.plan, { gfm: true })),
//       }}
//     />
//   </div>
// )}


//       {/* Diet Plan Form */}
//       <form onSubmit={fetchDietPlan} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <input
//           type="text"
//           placeholder="Goal (e.g., Weight Loss)"
//           value={goal}
//           onChange={(e) => setGoal(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Height (cm)"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//           required
//           min="50"
//         />
//         <input
//           type="number"
//           placeholder="Weight (kg)"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           required
//           min="20"
//         />
//         <input
//           type="text"
//           placeholder="Dietary Preference (e.g., Vegan)"
//           value={preference}
//           onChange={(e) => setPreference(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading} style={{ background: "#007bff", color: "#fff", padding: "10px", border: "none", cursor: "pointer" }}>
//           {loading ? "Generating..." : "Generate New Diet Plan"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Dietplanner;




import React, { useState, useEffect } from "react";
import { marked } from "marked";

const Dietplanner = () => {
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
        const response = await fetch("http://localhost:3000/dietplan/plan", {
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
      const response = await fetch("http://localhost:3000/dietplan/generate", {
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
    <div style={styles.page}>
      <h1 style={styles.heading}>AI-Powered Diet Planner</h1>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.container}>
        {/* LEFT: Form */}
        <form onSubmit={fetchDietPlan} style={styles.formSection}>
          <h2 style={styles.subheading}>Enter Your Details</h2>
          <input
            type="text"
            placeholder="Goal (e.g., Weight Loss)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            min="50"
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            min="20"
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Dietary Preference (e.g., Vegan)"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Generating..." : "Generate Diet Plan"}
          </button>
        </form>

        {/* RIGHT: Diet Plan Display */}
        <div style={styles.resultSection}>
          <h2 style={styles.subheading}>
            {dietPlan ? "Your Diet Plan" : "No Diet Plan Available"}
          </h2>
          {dietPlan ? (
            <div
              style={styles.planBox}
              dangerouslySetInnerHTML={{
                __html: marked.parse(dietPlan.plan, { gfm: true }),
              }}
            />
          ) : (
            <p style={{ color: "#555" }}>Generate a plan to see it here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    padding: "40px",
    backgroundColor: "#f4f6fa",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },
  container: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap", // for responsiveness
    justifyContent: "space-between",
  },
  formSection: {
    flex: "1 1 300px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  resultSection: {
    flex: "2 1 500px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
    overflowY: "auto",
    maxHeight: "600px",
  },
  subheading: {
    marginBottom: "10px",
    color: "#007bff",
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
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

export default Dietplanner;
