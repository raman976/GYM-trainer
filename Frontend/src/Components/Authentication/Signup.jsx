import React from "react";
import { useState } from "react";
import { FormContainer } from "./Form.Styled";
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
    <>
      <FormContainer onSubmit={handleclick}>
        <input
          type="text"
          placeholder="ENTER USERNAME"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="email"
          placeholder="ENTER EMAIL"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="ENTER PASSWORD"
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="ENTER PHONE NUMBER"
          onChange={(e) => setphone(e.target.value)}
        />
        <button type="submit">SIGNUP</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </FormContainer>
    </>
  );
};

export default Signup;
