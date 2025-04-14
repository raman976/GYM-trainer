import React from "react";
import {
  StyledCardLower,
  StyledCardUpperWrapper,
  StyledCardTitle,
  StyledCardUpper,
  StyledCardWrapper,
} from "./StyledMainpage";
const Card = (props) => {
  return (
    <div>
      <StyledCardWrapper key={props.props.id} onClick={props.onClick}>
        <StyledCardUpperWrapper>
          <StyledCardUpper src={props.props.image} alt={props.props.name} />
        </StyledCardUpperWrapper>

        <StyledCardLower>
          <StyledCardTitle>{props.props.name}</StyledCardTitle>
        </StyledCardLower>
      </StyledCardWrapper>
    </div>
  );
};
export default Card;
