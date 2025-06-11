import React from "react";
import logo2 from "../../assets/final.png";
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
  StyledLink
} from "./Form.Styled";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [isloading, setisloading] = useState(false);
  function handleclick(e) {
    setisloading(true);
    if (!name || !email || !password || !phone) {
      alert("Please fill all the fields");
      setisloading(false);
      return;
    }
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      phone,
    };
    console.log(data);
    fetch("https://gym-trainer-dbh0.onrender.com/auth/signup", {
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
          setisloading(false);
        }
      });
  }
  return (
    <BigContainer>
      <PageContainer>
        <ImageContainer1 />
        <FormContainer onSubmit={handleclick}>
        <div style={{display:"flex",alignItems:"center",flexDirection:"start",width: "100%",marginLeft: "30%"}}><img src={logo2} style={{marginBottom:"2.2%",height:"40px",width:"40px",borderRadius:"50%",marginRight:"3%"}}></img><h2 style={{color:"white",marginBottom:"0px,"}}>Glo</h2></div>
        
        <p style={{color:"#9CA3AF",marginTop:""}}>Welcome to Glo! We're thrilled you're here.</p>
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
            {isloading ? "Loading..." : "Sign Up"} 
          </StyledButton>
          <StyledText>
            Already have an account?{" "}
            <StyledLink to="/login">
              <StyledSpan>Login</StyledSpan>
            </StyledLink>
          </StyledText>
        </FormContainer>
      </PageContainer>
    </BigContainer>
  );
};

export default Signup;
