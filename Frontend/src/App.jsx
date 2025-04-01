import React from "react";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import Dashboard from "./Components/Dashboard";
import PrivateRoutes from "./Components/Authentication/PrivateRoutes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" ,backgroundColor:"white"}}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route element={<PrivateRoutes />}>
           <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
