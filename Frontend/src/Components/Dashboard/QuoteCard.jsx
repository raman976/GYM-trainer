import React from "react";
import { StyledQuoteCard, StyledQuoteCardWrapper } from "./StyledDashboard";

const QuoteCard = () => {
  return (
    <div>
      <StyledQuoteCardWrapper>
        <StyledQuoteCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="#none"
            stroke="#DAA520"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              backgroundColor: "#241F11",
              padding: "4px",
              borderRadius: "8px",
            }}
          >
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
          </svg>

          <h1>Transform Your Life</h1>
          <h4>"The only bad workout is the one that didn't happen. Every step forward is a step towards achieving your goals."</h4>
          <p>- Arnold Schwarzenegger</p>
        </StyledQuoteCard>
        <StyledQuoteCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#DAA520"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              backgroundColor: "#241F11",
              padding: "4px",
              borderRadius: "8px",
            }}
          >
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
          </svg>

          <h1>
          Embrace the Journey
          </h1>
          <h4>Success is not always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come."</h4>
          <p>- Dwayne Johnson</p>
        </StyledQuoteCard>
      </StyledQuoteCardWrapper>
    </div>
  );
};

export default QuoteCard;
