import React, { useState, useEffect } from "react";
// dependencies
import { useParams } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWorkouts } from "../redux/workouts/workoutsActions";
// components
import CreateWorkouts from "./forms/CreateWorkouts";

const EditWorkouts = () => {
  const [workout, setWorkout] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    location: "",
    rpe: 1,
    trainingDuration: "",
    trainingType: "",
  });

  // define dispatch that allows dispatching of actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  // let { workoutId } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(
  //       `http://localhost:4000/workouts/${workoutId}`
  //     );
  //     setWorkout({
  //       liftName: result.data.workout.liftName,
  //       sets: result.data.workout.sets,
  //       reps: result.data.workout.reps,
  //       weight: result.data.workout.weight,
  //     });
  //   };
  //   fetchData();
  // }, [workoutId]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const updatedWorkout = {
  //     liftName: workout.liftName,
  //     sets: workout.sets,
  //     reps: workout.reps,
  //     weight: workout.weight,
  //   };

  //   await axios
  //     .patch(
  //       `http://localhost:4000/workouts/update/${workoutId}`,
  //       updatedWorkout
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   history.push("/");
  // };

  return (
    // <>
    //   <Form className="container mt-5 mr-5">
    //     <Form.Group controlId="exercise">
    //       <Form.Label>Exercise</Form.Label>
    //       <Form.Control
    //         onChange={(e) =>
    //           setWorkout({ ...workout, liftName: e.target.value })
    //         }
    //         value={workout.liftName}
    //         type="text"
    //         placeholder="Exercise Name"
    //       />
    //       <Form.Text className="text-muted"></Form.Text>
    //     </Form.Group>
    //     <Form.Group controlId="sets">
    //       <Form.Label>Sets</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setWorkout({ ...workout, sets: e.target.value })}
    //         value={workout.sets}
    //         type="number"
    //         placeholder="How many sets?"
    //       />
    //     </Form.Group>
    //     <Form.Group controlId="reps">
    //       <Form.Label>Reps</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
    //         value={workout.reps}
    //         type="number"
    //         placeholder="How many reps per set?"
    //       />
    //       <Form.Text className="text-muted"></Form.Text>
    //     </Form.Group>
    //     <Form.Group controlId="weight">
    //       <Form.Label>Weight</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setWorkout({ ...workout, weight: e.target.value })}
    //         value={workout.weight}
    //         type="number"
    //         placeholder="Suggested starting weight"
    //       />
    //       <Form.Text className="text-muted"></Form.Text>
    //     </Form.Group>
    //     <Button
    //       className="allbuttons"
    //       variant="primary"
    //       type="submit"
    //       size="sm"
    //     >
    //       Submit
    //     </Button>
    //   </Form>
    // </>
    <>
      <CreateWorkouts editWorkout={workout} />
    </>
  );
};

export default EditWorkouts;
