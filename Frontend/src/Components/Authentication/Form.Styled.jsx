import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
  text-decoration: none;`
export const BigContainer = styled.div`
  background: #000000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  overflow: hidden;
  width: 65vw;
  height: 70vh;
  background-color: white;
`;

export const FormContainer = styled.form`
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 30vw;
  background: #171717;
`;
export const ImageContainer2 = styled.div`
  width: 35vw;
  height: 70vh;
  background: url("https://hips.hearstapps.com/hmg-prod/images/man-doing-arm-workout-with-dumbbell-at-gym-royalty-free-image-1665415841.jpg")
    no-repeat center center/cover;
`;
export const ImageContainer1 = styled.div`
  width: 35vw;
  height: 70vh;
  background: url("https://www.shape.com/thmb/eRwJgRaiYmLPm3svqnPOPoblmUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Yoga-For-Abs-GettyImages-1325708886-2000-9ec8e03309314a299c311248b0b6c8f3.jpg")
    no-repeat center center/cover;
  background-size: cover;
`;

export const StyledInputField = styled.input`
  border: none;
  margin-top: 9%;
  color: #ffffff;
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #f97316;
  }

  transition: all 0.3s ease;
  background: #262626;
  outline: 0.5px solid #404040;
  padding: 15px;
  height: 5vh;
  width: 40vh;
  ::placeholder {
    color: #ffffff;
  }
`;

export const StyledButton = styled.button`
  text-align: center;
  border: none;
  margin-top: 10%;
  padding: 15px;
  height: 5vh;
  width: 40vh;
  cursor: pointer;
  transition: background-color 0.3s ease, background-image 0.3s ease;
  background: linear-gradient(to right, #ea5a0c, #f59d0b);
  box-shadow: 0 10px 15px -3px rgba(234, 88, 12, 0.2);
  color: #ffffff;

  &:hover {
    background-image: linear-gradient(to right, #f97316, #fbbf24);
  }
`;

export const StyledText = styled.p`
  margin-top: 6%;
  color: white;
  text-decoration: none;
  Link{
    
    text-decoration: none;
  }
`;
export const StyledSpan = styled.span`
  text-decoration: none;
  color: #f97316;
  &:visited {
    color: #f97316;
    text-decoration: none;
  }
`;
