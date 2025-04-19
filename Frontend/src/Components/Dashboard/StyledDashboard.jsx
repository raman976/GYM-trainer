import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// export const StyledHeaderWrapper = styled.div`
//   display: flex;
//   flex-direction:row;
//   align-items: end;
//   `



export const StyledHeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  padding: 1rem 2rem;
  background: black;
`;
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

// export const VideoBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
//   width: 100%;
//   height: 100%;
//   filter: blur(3px) brightness(0.9);
//   transform: scale(1.1); 
// `;




export const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .player-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    height: 100% !important;
    width: 100% !important;
    pointer-events: none;
  }
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
width: 95%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin:auto;
margin-bottom: 10%;
h2{
  margin-bottom: 1%;
}
`
export const StyledDashboardInnerWrapper = styled.div`
display: flex;
gap: 2%;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`
export const StyledDashboardCard = styled.div`
padding: 2%;

gap: 6%;
width: 20vw;
height: 33vh;
border-radius: 3%;
border: 1px solid rgb(172, 172, 172);
background: linear-gradient(to right, #0F0F0F 50%, #000000);

display: flex;
flex-direction: column;
h3{
  color: #FFFFFF;
  font-size: 1.5vw;
  line-height: 28px;
}
p{
  color: #656971;
  font-size: 1.1vw;
  line-height: 24px;
  font-weight: 400;
}
&:hover {
  border-color: transparent;
  box-shadow: 0 0 0 2px #f97316;
}
  transition: all 0.3s ease;
`

export const StyledButton=styled(Link)`
width: 100%;
height: 10%;
color: #DAA520;
text-decoration: none;
font-size: 1.3vw;
line-height: 24px;
transition: all 0.3s ease-in-out;
transform: scale(1);
:hover{
  transform: scale(2.1);
  background-color: red; 
}
`

export const StyledFooter = styled.footer`
height: auto;
background-color: #121212;
display: flex;
width: 100%;
flex-direction: column;
`
export const StyledFooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3rem 2rem;
`;
export const StyledFooterText = styled.p`
  color: #FFFFFF;
  font-size: 1.2rem;
  h2{
    color: #C6961E;
    margin-bottom: 1rem;
  }
  p{
    color: #9FA2A6;
    font-size: 1.1rem;
  }
  input{
    padding: 0.5rem;
    background-color: #0E0E0E;
    border-radius: 5px;
    border: 1px solid #686D75;
    outline: none;
    width: 70%;
    margin-top: 1rem;
    color: #FFFFFF;
    ::placeholder{
      color: #FFFFFF;
    }
    &:focus {
  border-color: transparent;
  box-shadow: 0 0 0 2px #f97316;
}
  transition: all 0.3s ease;
  }
  button{
    height: 4.1vh;
    margin: 1.2%;
    background: #F97316;
    border: none;
    color: black;
    font-weight:600;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    transition: all 0.3s ease;
    &:hover {
      background:rgb(185, 80, 5);
    }
    transition: all 0.3s ease;
  }
`;

export const StyledFooterBottom = styled.div`
display: flex;
color: #9FA2A6;
font-size: 1rem;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 3rem 2rem;
`


export const StyledQuoteCardWrapper = styled.div`
display: flex;
gap: 5%;
flex-direction:row;
height: auto;
transition: all 0.3s ease;
:hover{
  svg{
    transform: scale(1.2);
  }StyledQuoteCard{
    transform: scale(1.1);
  }
}
width: 100%;
justify-content: center;
align-items: center;
margin: auto;
padding: 2%;
`

export const StyledQuoteCard = styled.div`
display: flex;
padding: 3%;
color: #FFFFFF;
background: linear-gradient(to right, #111111 50%, #010101);
border-radius:20px;
width:50%;
flex-direction: column;
align-items: flex-start;
gap: 3vh;
height: 40vh;
border: 1px solid rgb(172, 172, 172);
h1{
  line-height: 28px;
  color: #DAA520;
  margin-top: 3.5vh;
}
p{
  color:#DAA520;
  font-weight: 800;
}
h4{
  line-height: 3vh;
  font-size: larger;
}
`