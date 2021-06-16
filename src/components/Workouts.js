import React, { useEffect } from "react";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWorkouts } from "../redux/workouts/workoutsActions";
// dependencies

// styles
// import { Table, Container, Spinner, Row, Col } from "react-bootstrap";
import { Container, Grid } from "@material-ui/core";
// components

import WorkoutCard from "./WorkoutCard";

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
  const reduxState = useSelector((state) => state);
  console.log(reduxState);
  return (
    <Container spacing={3}>
      <Grid container>
        {!workouts
          ? "Loading"
          : workouts.map((workout) => (
              <Grid item key={workout.id} xs={12} md={6} lg={4}>
                <WorkoutCard workout={workout} key={workout.id} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}

export default Workouts;
