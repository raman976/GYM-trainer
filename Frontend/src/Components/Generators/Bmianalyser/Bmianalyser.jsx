// import React, { useEffect, useState } from "react";
// import { marked } from "marked";

// const Bmianalyser = () => {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [gender, setGender] = useState("");
//   const [age, setAge] = useState("");
//   const [analysis, setAnalysis] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const token = localStorage.getItem("token");

//   // Fetch existing BMI analysis
//   useEffect(() => {
//     async function fetchBMI() {
//       if (!token) {
//         setError("No token found. Please log in.");
//         return;
//       }

//       setLoading(true);
//       try {
//         const res = await fetch("http://localhost:3000/analyse/get", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           credentials: "include",
//         });

//         if (!res.ok) throw new Error("Failed to fetch BMI analysis");

//         const data = await res.json();
//         setAnalysis(data.analysis);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchBMI();
//   }, [token]);

//   // Generate new BMI analysis
//   async function generateBMI(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     if (!token) {
//       setError("Authentication error: Please log in.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:3000/analyse/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         credentials: "include",
//         body: JSON.stringify({ height, weight, gender, age }),
//       });

//       if (!res.ok) throw new Error("Failed to generate BMI analysis");

//       const data = await res.json();
//       setAnalysis(data.analysis);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
//       <h1>Body Mass Index (BMI) Analyzer</h1>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {analysis && (
//         <div style={{ background: "#f8f8f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
//           <h2>Your Last BMI Analysis:</h2>
//           <div
//             style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
//             dangerouslySetInnerHTML={{ __html: marked.parse(analysis) }}
//           />
//         </div>
//       )}

//       <form onSubmit={generateBMI} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <input
//           type="number"
//           placeholder="Height (cm)"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Weight (kg)"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Gender"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             background: "#007bff",
//             color: "#fff",
//             padding: "10px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           {loading ? "Analyzing..." : "Generate BMI Analysis"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Bmianalyser;





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
        const cleanAnalysis = data.analysis.replace(/\\boxed{([^}]*)}/g, "$1");

        setAnalysis(cleanAnalysis);
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
    <div style={styles.page}>
      <h1 style={styles.heading}>AI-Powered BMI Analyzer</h1>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.container}>
        {/* LEFT: Form */}
        <form onSubmit={generateBMI} style={styles.formSection}>
          <h2 style={styles.subheading}>Enter Your Details</h2>
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
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min="1"
            style={styles.input}
          />
          <button type="submit" disabled={loading} style={{color:"black",fontWeight:"bold",fontSize:"16px",padding:"12px",backgroundColor:"#EBEDF1",border:"none",borderRadius:"6px",cursor:"pointer",marginTop:"10px"}}>
            {loading ? "Analyzing..." : "Generate BMI Analysis"}
          </button>
        </form>

        {/* RIGHT: Result Display */}
        <div style={styles.resultSection}>
          <h2 style={{color: "black", marginBottom: "10px"}}>
            {analysis ? "Your BMI Analysis" : "No Analysis Available"}
          </h2>
          {analysis ? (
            <div
              style={styles.planBox}
            
              dangerouslySetInnerHTML={{ __html: marked.parse(analysis) }}
            />
          ) : (
            <p style={{ color: "#555" }}>Generate your BMI analysis to see it here.</p>
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

export default Bmianalyser;

