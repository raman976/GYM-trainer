import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction:row;
  align-items: end;
  `
export const StyledDiv = styled.div`
display: flex;
margin-top: 2.5%;
margin-left: 3%;
margin-bottom: 0%;
flex-direction: column;
`
export const StyledHeader = styled.h2`

font-size: 30px;
background: black;
color: #FFFFFF;
span{
  color: #DAA520;
}
`
export const StyledPara = styled.p`
color: #9CA3AF;
font-size: 20px;
`
export const StyledFeatureSection = styled.div`
  display: grid;
  justify-self: center;
  width: 75vw;
  min-height: 100vh;
  /* height: 80vh; */
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 40px;
  background-color: transparent;
`;
export const StyledCenteredDiv = styled.div`
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0;
`;

export const StyledCards = styled(Link)`
  width: 30vw;
  height: 20vh;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 0;
  text-decoration: none;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  div {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
    text-align: left;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #666;
    text-align: left;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background-color: #f0f0f0;
  }
`;

export const StyledCardLeft = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  align-self: center;
  height: 90%;
  width: 40%;
  min-height: 120px; 
`;

export const HeroContainer = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  filter: blur(3px) brightness(0.9);
  transform: scale(1.1); 
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

// export const TextOverlay = styled.div`
//   position: relative;
//   z-index: 3;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 6rem;
//   color: white;
//   text-align: center;
// `;

export const TextOverlay = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: white;
  font-size: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledFooter = styled.div`
  background-color: #2e2e2e;
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding-left:6%;
  justify-content: center;
  align-items: start;
  margin-top: auto;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
`;




export const ScrollDownArrow = styled.div`
  margin-top: 1rem;
  animation: ${bounce} 2s infinite;
  svg {
    width: 32px;
    height: 32px;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));
  }
`;