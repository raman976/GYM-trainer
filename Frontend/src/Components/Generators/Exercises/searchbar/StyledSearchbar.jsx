import styled from "styled-components"; 


export const  StyledInput=styled.input`
font-size: 1rem;
width:100%;
height:5vh;
background: #090909;
backdrop-filter: blur(8px);
color: #ffffff;
border: 1px solid rgba(255, 255, 255, 0.2);
padding:10px 30px;
outline: none;
transition: all 0.3s ease;
::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
&:focus{
    outline:2px solid #D9A520
}
border-radius: 10px;
`

export const StyledWrapper=styled.div`
display: flex;
width: 30%;
align-items: center;
justify-content: flex-start;
flex-direction: row;

position: sticky;
margin-top:1%;
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