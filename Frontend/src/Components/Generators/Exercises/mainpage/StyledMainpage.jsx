import styled from "styled-components";

export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  border-radius: 30px;
  grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
  gap: 2.2rem;
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

export const StyledCardUpperWrapper = styled.div`
  width: 100%;;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;
  border-radius: 10px;
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #3A3A3A;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #7f7fa0 50%, #a8b2c5 100%);
  transition: transform 0.2s;
  overflow: hidden;
  border-radius: 10px;
  transform: all 0.3s ease;
  &:hover {
    border: 1px solid #F97316;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledCardUpper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  &:hover {
    transform: scale(1.05);
    object-position: center;
    cursor: pointer;
  }
  transition: transform 0.3s ease, object-position 0.3s ease;
`;

export const StyledCardTitle = styled.p`
color: #F97316;
bottom : 0;
background: black;
padding: 2%;
  position: absolute;
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 6%;
  width: 100%;
`;
export const StyledCardSubTitle = styled.p`
padding: 2%;
bottom : 0;
word-spacing: 1.8vw;
position: absolute;
background: black;
  color: white;
  font-size: 1rem;
  text-align: left;
  margin: 0;
  width: 100%;
`;

export const StyledPageWrapper = styled.div`
  display: flex;
  padding: 3%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
