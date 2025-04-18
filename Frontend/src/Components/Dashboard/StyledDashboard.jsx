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

export const StyledDashboardOuterWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin:auto;
`
export const StyledDashboardInnerWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100%;
`
export const StyledDashboardCard = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
h1{
  color: #DAA520;
  font-size: 30px;
}
p{
  color: #9CA3AF;
  font-size: 20px;
}
`