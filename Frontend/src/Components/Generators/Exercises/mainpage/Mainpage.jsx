import React, { useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import Filterbar from "../filterbar/Filterbar";
import Card from "./Card";
import { exercises } from "../ExerciseConstants";
import { GridWrapper } from "./StyledMainpage";

const Mainpage = () => {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.name.toLowerCase().includes(search.toLowerCase());

    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.some((filter) =>
        [exercise.type, exercise.gender].includes(filter)
      );

    return matchesSearch && matchesFilters;
  });

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <Filterbar
        selectedFilters={selectedFilters}
        onFilterClick={handleFilterClick}
      />
      <GridWrapper>
        {filteredExercises.map((exercise) => (
          <Card key={exercise.name} props={exercise} />
        ))}
      </GridWrapper>
    </div>
  );
};

export default Mainpage;
