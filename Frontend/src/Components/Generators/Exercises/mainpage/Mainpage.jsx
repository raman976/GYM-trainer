import React, { useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import Filterbar from "../filterbar/Filterbar";
import Card from "./Card";
import ExerciseModal from "./ExerciseModal";
import { exercises } from "../ExerciseConstants";
import { GridWrapper, StyledPageWrapper } from "./StyledMainpage";
import Footer from "../../../Dashboard/Footer"
const Mainpage = () => {
  const [search, setSearch] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.some((filter) =>
        [exercise.type, exercise.gender].includes(filter)
      );

    return matchesSearch && matchesFilters;
  });

  return (
    <div>
    <div
      style={{
        backgroundColor: "black",
        height: "100%",
        overflowY: "auto",
        width: "100%",
      }}
    >
      <StyledPageWrapper>
        <h1 style={{ color: "#F97316", fontSize: "5vh",marginBottom:"1.39vh"}}>Exercise Library</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            gap: "2.1%",
            flexDirection: "row",
          }}
        >
          <SearchBar search={search} setSearch={setSearch} />
          <Filterbar
            selectedFilters={selectedFilters}
            onFilterClick={handleFilterClick}
          />
        </div>
        <GridWrapper>
          {filteredExercises.map((exercise) => (
            <Card
              key={exercise.name}
              props={exercise}
              onClick={() => {
                console.log("Clicked:", exercise.name);
                setSelectedExercise(exercise);
              }}
            />
          ))}
        </GridWrapper>
        <ExerciseModal
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      </StyledPageWrapper>
    </div>
    <Footer />
    </div>
  );
};

export default Mainpage;
