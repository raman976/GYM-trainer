import React, { useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import Filterbar from '../filterbar/Filterbar';
import Card from "./Card";
import { exercises } from "../ExerciseConstants";
const Mainpage = () => {
    const [search, setSearch] = useState("");

    const filteredExercises = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(search.toLowerCase())
    );
  
    const displayedExercises = search ? filteredExercises : exercises;
  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
        <Filterbar />
      {displayedExercises.map((exercise) => (
        <Card key={exercise.name} props={exercise} />
      ))}
    </div>
  );
};

export default Mainpage;
