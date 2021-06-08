import React, { useEffect } from "react";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWorkouts } from "../redux/workouts/workoutsActions";
// dependencies
import axios from "axios";
// styles
import { Table, Container, Spinner, Row, Col } from "react-bootstrap";
// components
import RenderWorkout from "./RenderWorkout";

function Workouts() {
  // define dispatch that allows dispatching of actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  // useSelector allows us to reach into global redux store
  // parameter in useSelector gives us access to entire store
  const workouts = useSelector((state) => state.workouts.workouts.workouts);
  console.log(workouts);
  // const [exercises, setExercises] = useState([]);
  // const [updatedExercises, setUpdatedExercises] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("http://localhost:4000/workouts");
  //     setExercises(result.data.workouts);
  //     console.log(exercises);
  //   };
  //   fetchData();
  // }, [updatedExercises]);

  // const handleDelete = (workoutToBeDeleted) => {
  //   axios
  //     .delete(`http://localhost:4000/workouts/${workoutToBeDeleted}`)
  //     .then((response) => {
  //       let updatedWorkouts = exercises.filter((exercise) => {
  //         console.log("deleted");
  //         return exercise.id !== workoutToBeDeleted.id;
  //       });

  //       setUpdatedExercises(updatedWorkouts);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return !workouts ? (
    <>
      <Container>
        <Row className="text-center mt-3">
          <Col>
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <>
      <Container className="workouts__container">
        <h3>Workouts List</h3>
        <Table className="workouts__table" striped bordered hover>
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
            {workouts.map((exercise) => (
              <RenderWorkout exercise={exercise} key={exercise.id} />
            ))}
            {/* {exercises.map((exercise) => (
              <RenderWorkout
                exercise={exercise}
                key={exercise.id}
                handleDelete={handleDelete}
              />
            ))} */}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Workouts;
