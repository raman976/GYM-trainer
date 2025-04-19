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
  margin-top: 1%;
`;

export const StyledFormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: start;
    flex-wrap: wrap;
    gap: 20px;
`

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 20px;
width: 30%;
border: 1px solid #191919;
padding: 20px;
background: linear-gradient(to right, #111111 50%, #000000 100%);
imput{
    
}
`