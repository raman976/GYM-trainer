import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 5rem;
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  height:85%;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #423C40, #3A5C60);

  transition: transform 0.2s;
  padding: 1rem;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const StyledCardUpperWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #423C40, #3A5C60);

  border-radius: 10px;
`;

export const StyledCardUpper = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;
export const StyledCardLower = styled.div`
  display: flex;
  background: linear-gradient(to right, #423C40, #3A5C60);
  width: 100%;
  height: 100%;
  flex-direction: column;
  text-align: center;

  padding: 1rem;
`;
export const StyledCardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
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
