import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  background: black;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  flex-direction: column;
`;
export const StyledHeaderContainer = styled.div`
margin: 4vh;
padding-top: 0px;
  width: 50%;
  height: 10vh;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  flex-direction: column;
  background-color: black;
`;
export const StyledHeader = styled.h1`
  font-size: 2.5rem;
  color: #FFFFFF;
  text-align: center;
  margin-top: 2%;
`;
export const StyledSubHeader = styled.h2`
  font-size: 1rem;
  color: #727780;
  text-align: center;
  margin-top: 2%;
`;

export const StyledFormContainer = styled.div`
width: 87%;
margin-top: 2.1%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2%;
`

export const StyledForm = styled.form`
gap:3vh;
outline: none;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 20px;
width: 27%;
border: 1px solid #191919;
padding: 1.3%;
background: linear-gradient(to right, #111111 50%, #000000 100%);
transition: all 0.3s ease;
&:focus{
  outline: 2px solid #F97316
}

`
export const StyledInput = styled.input`
background:#121212;
border-radius: 10px;
margin-bottom:1.5vh;
    outline: none;
    border: 1px solid #404040;
    width:80%;
  padding: 10px;
  transition: all 0.3s ease;
  &:focus{
    outline: 2px solid #F97316 
  }
&::placeholder {
  color:#777777
}`


export const StyledButton = styled.button`
width: 80%;
background:#E06713;
border: none;
color:white;
height: 4.7vh;
border-radius: 10px;
`