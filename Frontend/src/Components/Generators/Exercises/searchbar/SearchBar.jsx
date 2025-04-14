import React from "react";
import {
  StyledInput,
  StyledLovedWorkouts,
  StyledWrapper,
} from "./StyledSearchbar";

const SearchBar = ({ search, setSearch }) => {
  function handle(e) {
    setSearch(e.target.value);
  }

  return (
    <StyledWrapper>
      <div style={{ flex: 1 }} />
      <StyledInput
        placeholder="[|━|] search a workout"
        onChange={handle}
        value={search}
      />
      <StyledLovedWorkouts
        src="https://cdn-icons-mp4.flaticon.com/512/11186/11186871.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </StyledWrapper>
  );
};

export default SearchBar;
