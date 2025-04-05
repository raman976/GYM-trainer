import React from "react";
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
    fetch ("http://localhost:3000/auth/login", {
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
