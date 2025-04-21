import React from "react";
import { StyledFilterbar, StyledWrapper2 } from "./Styledfilterbar";

const filterOptions = [
  "Cardio",
  "Strength",
  "Yoga",
  "Flexibility",
  "Male",
  "Female",
];
//linear-gradient(to right, #423C40, #3A5C60)
const Filterbar = ({ selectedFilters, onFilterClick }) => {
  return (
    <StyledWrapper2>
      <StyledFilterbar>
        {filterOptions.map((filter) => (
          <div
            key={filter}
            onClick={() => onFilterClick(filter)}
            style={{
              fontSize: "1em",
              cursor: "pointer",
              padding: "0.005rem 0.7rem",
              borderRadius: "20px",
              margin: "0.1rem",
              background: !selectedFilters.includes(filter)
                ? "transparent"
                : "#F97316",
              color: selectedFilters.includes(filter) ? "white" : "white",
              transition: "all 0.2s",
            }}
          >
            {filter}
          </div>
        ))}
      </StyledFilterbar>
    </StyledWrapper2>
  );
};

export default Filterbar;
