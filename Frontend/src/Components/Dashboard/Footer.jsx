import React from "react";
import { StyledFooter, StyledFooterContent, StyledFooterText,StyledFooterBottom } from "./StyledDashboard";

const Footer = () => {
  return (
    <div>
    <StyledFooter>

      <StyledFooterContent>
        <StyledFooterText>
          <h2>Contact us</h2>
          <p>For any inquiries, please reach out to us at:</p>
          <p>Email:   ramanpandey976@gmail.com</p>
          <p>Phone:   9517354431</p>
        </StyledFooterText>
        <StyledFooterText>
          <h2>Follow us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </StyledFooterText>
        <StyledFooterText>
          <h2>Join Our Newsletter</h2>
          <p>Get fitness tips and exclusive offers directly in your inbox.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
          </StyledFooterText>
      </StyledFooterContent>
      <div style={{height:"0.01vh",width:"96%",background:"white",margin:"auto"}}></div>
      <StyledFooterBottom>
        <p>&copy; 2025 Fitness App. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </StyledFooterBottom>
     
    </StyledFooter>
    </div>
  )
}

export default Footer