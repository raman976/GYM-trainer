import React from "react";
import { StyledFooter } from "./StyledDashboard";

const Footer = () => {
  return (
    <div>
    <div style={{backgroundColor: "white",width:"100%",height:"6px"}}></div>
    <StyledFooter>
        <p>FOR ANY QUERY EMAIL US AT: <a href="mailto:ramanpandey976@gmail.com" style={{textDecoration:"none"}}>ramanpandey976@gmail.com</a></p>
        <p>FOLLOW US ON : <a href="https://www.linkedin.com/in/raman-pandey-872268333/">LINKEDIN</a></p>
    </StyledFooter>
    </div>
  )
}

export default Footer