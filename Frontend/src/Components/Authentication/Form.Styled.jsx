import styled from "styled-components";

export const BigContainer=styled.div`
background: #1C1C1E;
    width:100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 65vw;
  height: 70vh;
  background-color: white;
`;

export const FormContainer = styled.form`
padding: 10px;
    margin: auto;
    gap: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 25vw;
    background-color:#2E2E2E;
`
export const ImageContainer1 = styled.div`
  width: 40vw;
  height: 70vh;
  background: url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center/cover;
`;
export const ImageContainer2 = styled.div`
  width: 40vw;
  height: 70vh;
  background: url('https://e0.pxfuel.com/wallpapers/777/418/desktop-wallpaper-womens-fitness-female-fitness.jpg') no-repeat center center/cover;
  background-size: cover;
`;

export const StyledInputField=styled.input`
border:none;
padding:15px;
height: 5vh;
width:25vh;
border-radius: 999px;
`

export const StyledButton=styled.button`
border:none;
padding:15px;
height: 5vh;
width:25vh;
border-radius: 999px;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
    background-color: #45a049; 
  }
`

export const StyledText=styled.p`
color: white;
`
export const StyledSpan=styled.span`
text-decoration: none;
color: white;
`