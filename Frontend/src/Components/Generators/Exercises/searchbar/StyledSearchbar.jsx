import styled from "styled-components"; 


export const  StyledInput=styled.input`
font-size: 1rem;
width:50%;
height:50px;
border-radius:999px;
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(8px);
color: #ffffff;
border: 1px solid rgba(255, 255, 255, 0.2);
padding:10px 30px;
outline: none;
::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
`

export const StyledWrapper=styled.div`
display: flex;
max-width: 100vw;
align-items: center;
justify-content: center;
flex-direction: row;

position: sticky;
z-index: 999;
left: 0;
right: 0;
`


export const StyledLovedWorkouts=styled.video`
width: 4vw; 
  height: 4vw; 
  margin-left: 20vw; 
  margin-right: 0.6%;
  object-fit: cover; 
`