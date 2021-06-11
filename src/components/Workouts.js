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

  // return !workouts ? (
  //   <>
  //     <Container>
  //       <Row className="text-center mt-3">
  //         <Col>
  //           <Spinner animation="border" variant="success" />
  //           <Spinner animation="border" variant="danger" />
  //           <Spinner animation="border" variant="warning" />
  //           <Spinner animation="border" variant="info" />
  //         </Col>
  //       </Row>
  //     </Container>
  //   </>
  // ) : (
  //   <>
  //     <Container className="workouts__container">
  //       <Row>
  //         {workouts.map((workout) => (
  //           <Col md={6} lg={6}>
  //             <RenderWorkout workout={workout} key={workout.id} />
  //           </Col>
  //         ))}
  //       </Row>
  //     </Container>
  //   </>
  // );
}

export default Workouts;
