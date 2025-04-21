import React from "react";
import {
  StyledCardUpperWrapper,
  StyledCardTitle,
  StyledCardUpper,
  StyledCardWrapper,
  StyledCardSubTitle
} from "./StyledMainpage";
const Card = (props) => {
  return (
    <div>
      <StyledCardWrapper key={props.props.id} onClick={props.onClick}>
        <StyledCardUpperWrapper>
          <StyledCardUpper src={props.props.image} alt={props.props.name} />

          <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "flex-start",
    textAlign: "left",
  }}
>
  <StyledCardTitle>{props.props.name}</StyledCardTitle>
  <StyledCardSubTitle>{props.props.targetedpart}    {props.props.type}</StyledCardSubTitle>
</div>

        </StyledCardUpperWrapper>
      </StyledCardWrapper>
    </div>
  );
};
export default Card;

// <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",width:"100%",alignItems:"flex-start",textAlign:"left"}}></div>
