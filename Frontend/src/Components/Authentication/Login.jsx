import React from "react";
import logo2 from "../../assets/final.png";
import { BigContainer, FormContainer, ImageContainer2, PageContainer, StyledButton, StyledInputField, StyledSpan, StyledText } from "./Form.Styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
    fetch ("https://gym-trainer-production.up.railway.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
         console.log("Login successful");
         localStorage.setItem("token", data.token);
          navigate("/dashboard");
        } else {
          console.log("Login failed");
        }
      });
  }

  return (
    <BigContainer>
    <PageContainer>
    <ImageContainer2/>
    <FormContainer onSubmit={handleSubmit}>
    <div style={{display:"flex",alignItems:"center",flexDirection:"start",width: "100%",marginLeft: "23%"}}><img src={logo2} style={{marginBottom:"2.2%",height:"40px",width:"40px",borderRadius:"50%",marginRight:"3%"}}></img><h2 style={{color:"white",marginBottom:"0px,"}}>Glo</h2></div>
            
            <p style={{color:"#9CA3AF",marginTop:""}}>Welcome back, We are happy to see you again.</p>
      <StyledInputField
        type="email"
        placeholder="enter you registered email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInputField
        type="password"
        placeholder="enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton type="submit">LOGIN</StyledButton>
      <StyledText>
        Don't have an account? <Link to="/signup"><StyledSpan>Click to Signup</StyledSpan></Link>
      </StyledText>
    </FormContainer>
    </PageContainer>
    </BigContainer>
  );
};

export default Login;
