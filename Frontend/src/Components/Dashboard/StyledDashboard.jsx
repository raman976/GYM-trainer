import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFeatureSection = styled.div`
  display: grid;
  justify-self: center;
  width: 75vw;
  height: 80vh;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  padding: 40px;
  background-color: transparent;
`;
export const StyledCenteredDiv = styled.div`
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  width: 100vw;
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

export const TextOverlay = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  color: white;
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