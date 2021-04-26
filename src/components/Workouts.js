import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

import RenderWorkout from "./RenderWorkout";

function Workouts() {
  const [exercises, setExercises] = useState([]);
  const [updatedExercises, setUpdatedExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/workouts");
      setExercises(result.data.workouts);
      console.log(exercises);
    };
    fetchData();
  }, [updatedExercises]);

  const handleDelete = async (workoutToBeDeleted) => {
    await axios
      .delete(`http://localhost:4000/workouts/${workoutToBeDeleted}`)
      .then((response) => {
        let updatedWorkouts = exercises.filter((exercise) => {
          console.log("deleted");
          return exercise.id !== workoutToBeDeleted.id;
        });

        setUpdatedExercises(updatedWorkouts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <h3>Workouts List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <RenderWorkout
              exercise={exercise}
              key={exercise.id}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Workouts;
