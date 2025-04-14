import React from "react";
import { StyledFilterbar, StyledWrapper2 } from "./Styledfilterbar";

const filterOptions = ["Cardio", "Strength", "Yoga", "Flexibility", "Male", "Female"];

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
              backgroundColor: selectedFilters.includes(filter) ? "#000" : "#eee",
              color: selectedFilters.includes(filter) ? "#fff" : "#000",
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
