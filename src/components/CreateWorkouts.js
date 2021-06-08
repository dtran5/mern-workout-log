import React, { useState } from "react";
// dependencies
import axios from "axios";
// redux
import { useDispatch } from "react-redux";
import { createWorkout } from "../redux/workouts/workoutsActions";
// styling
import {
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

function CreateWorkouts() {
  const dispatch = useDispatch();
  const [workout, setWorkout] = useState({
    liftName: "",
    sets: "",
    reps: "",
    weight: "",
    rpe: 1,
    recommended: "",
  });

  const handleRPE = (e) => {
    e.preventDefault();

    if (e.target.id === "one") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "two") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "three") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "four") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "five") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "six") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "seven") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "eight") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "nine") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    } else if (e.target.id === "ten") {
      setWorkout({
        ...workout,
        rpe: parseInt(e.target.innerHTML),
      });
    }
  };

  const handleRecommended = (e) => {
    setWorkout({
      ...workout,
      recommended: e,
    });
  };

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
  console.log(workout.recommended);
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
        <Form.Group controlId="weight">
          <Form.Label>How was it?</Form.Label>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="w-75" aria-label="First group">
              <Button id="one" onClick={handleRPE} value={workout.rpe}>
                1
              </Button>{" "}
              <Button id="two" onClick={handleRPE} value={workout.rpe}>
                2
              </Button>{" "}
              <Button id="three" onClick={handleRPE} value={workout.rpe}>
                3
              </Button>{" "}
              <Button id="four" onClick={handleRPE} value={workout.rpe}>
                4
              </Button>
              <Button id="five" onClick={handleRPE} value={workout.rpe}>
                5
              </Button>
              <Button id="six" onClick={handleRPE} value={workout.rpe}>
                6
              </Button>
              <Button id="seven" onClick={handleRPE} value={workout.rpe}>
                7
              </Button>
              <Button id="eight" onClick={handleRPE} value={workout.rpe}>
                8
              </Button>
              <Button id="nine" onClick={handleRPE} value={workout.rpe}>
                9
              </Button>
              <Button id="ten" onClick={handleRPE} value={workout.rpe}>
                10
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form.Group>
        <DropdownButton
          drop={"right"}
          id="dropdown-basic-button"
          title="Recommend to a friend?"
          value={workout.recommended}
          onSelect={handleRecommended}
        >
          <Dropdown.Item href="#/action-3">Yup</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Maybe</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Nah</Dropdown.Item>
        </DropdownButton>

        <Button
          className="allbuttons mt-3"
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
