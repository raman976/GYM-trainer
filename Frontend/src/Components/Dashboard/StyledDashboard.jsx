import styled from "styled-components";
import react from "react";
import { Link } from "react-router-dom";

export const StyledFeatureSection = styled.div`
  display: grid;
  justify-self: center;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 40px;
  background-color: transparent;
`;
export const StyledCenteredDiv = styled.div`
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  height: 100vh;
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


