import React, { useState } from "react";
// dependencies
import axios from "axios";
// redux
import { useDispatch } from "react-redux";
import { createWorkout } from "../redux/workouts/workoutsActions";
// styling
import { Form, Button } from "react-bootstrap";

function CreateWorkouts() {
  const dispatch = useDispatch();
  const [workout, setWorkout] = useState({
    liftName: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newWorkout = {
    //   liftName: workout.liftName,
    //   sets: workout.sets,
    //   reps: workout.reps,
    //   weight: workout.weight,
    // };

    dispatch(createWorkout(workout));

    // await axios
    //   .post("http://localhost:4000/workouts", newWorkout)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    // setWorkout({
    //   liftName: "",
    //   sets: "",
    //   reps: "",
    //   weight: "",
    // });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="container mt-5 mr-5">
        <Form.Group controlId="exercise">
          <Form.Label>Exercise</Form.Label>
          <Form.Control
            onChange={(e) =>
              setWorkout({ ...workout, liftName: e.target.value })
            }
            value={workout.liftName}
            type="text"
            placeholder="Exercise Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="sets">
          <Form.Label>Sets</Form.Label>
          <Form.Control
            onChange={(e) => setWorkout({ ...workout, sets: e.target.value })}
            value={workout.sets}
            type="number"
            placeholder="How many sets?"
          />
        </Form.Group>
        <Form.Group controlId="reps">
          <Form.Label>Reps</Form.Label>
          <Form.Control
            onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
            value={workout.reps}
            type="number"
            placeholder="How many reps per set?"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            onChange={(e) => setWorkout({ ...workout, weight: e.target.value })}
            value={workout.weight}
            type="number"
            placeholder="Suggested starting weight"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button
          className="allbuttons"
          variant="primary"
          type="submit"
          size="sm"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default CreateWorkouts;
