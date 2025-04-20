import styled from "styled-components";

export const GridWrapper = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
  gap: 1.5rem;
  padding-top: 4%;
`;

// export const StyledCardWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   border: 1px solid #ccc;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   background: linear-gradient(to right, #7F7FA0 50%, #A8B2C5 100%);
//   transition: transform 0.2s;
//   &:hover ${StyledCardUpper} {
//   transform: scale(1.1);
// }
//   @media (max-width: 768px) {
//     flex-direction: column;
//     width: 100%;
//   }
// `;

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #7F7FA0 50%, #A8B2C5 100%);
  transition: transform 0.2s;


  &:hover ${StyledCardUpper} {
    transform: scale(1.2);   
    object-position: center; 
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const StyledCardUpperWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0; 
  border-radius: 10px;
`;

export const StyledCardUpper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  display: block;

  transition: transform 0.3s ease, object-position 0.3s ease;
`;

export const StyledCardLower = styled.div`
  display: flex;
  background: linear-gradient(to right, #7F7FA0 50%, #A8B2C5 100%);
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;

`;
export const StyledCardTitle = styled.h2`
  font-size: 0rem;

`;
export const StyledCardDescription1 = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: start;
`;
export const StyledCardDescription2 = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: end;
`;
export const StyledCardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: end;
`;


export const StyledPageWrapper = styled.div`
display: flex;
padding:3%;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
height: 100%;
`