import React from "react";
import { useState } from "react";
import {
  BigContainer,
  FormContainer,
  ImageContainer1,
  PageContainer,
  StyledButton,
  StyledInputField,
  StyledSpan,
  StyledText,
} from "./Form.Styled";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  function handleclick(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      phone,
    };
    console.log(data);
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          navigate("/login");
        }
      });
  }
  return (
    <BigContainer>
      <PageContainer>
        <ImageContainer1 />
        <FormContainer onSubmit={handleclick}>
          <StyledInputField
            type="text"
            placeholder="ENTER USERNAME"
            onChange={(e) => setusername(e.target.value)}
          />
          <StyledInputField
            type="email"
            placeholder="ENTER EMAIL"
            onChange={(e) => setemail(e.target.value)}
          />
          <StyledInputField
            type="password"
            placeholder="ENTER PASSWORD"
            onChange={(e) => setpassword(e.target.value)}
          />
          <StyledInputField
            type="text"
            placeholder="ENTER PHONE NUMBER"
            onChange={(e) => setphone(e.target.value)}
          />
          <StyledButton type="submit">
            SIGNUP 
          </StyledButton>
          <StyledText>
            Already have an account?{" "}
            <Link to="/login">
              <StyledSpan>Click to Login</StyledSpan>
            </Link>
          </StyledText>
        </FormContainer>
      </PageContainer>
    </BigContainer>
  );
};

export default Signup;
