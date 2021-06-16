import React, { useState } from "react";
// dependencies
import { useHistory } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  createWorkout,
  updateWorkout,
} from "../redux/workouts/workoutsActions";
// styling
import {
  Typography,
  Container,
  TextField,
  makeStyles,
  Button,
  ButtonGroup,
  Grid,
} from "@material-ui/core";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import MoodIcon from "@material-ui/icons/Mood";

const useStyles = makeStyles({
  textField: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    display: "block",
  },

  btnOne: {
    backgroundColor: "#69b34c",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnTwo: {
    backgroundColor: "#69b34c",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnThree: {
    backgroundColor: "#8bc34a",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnFour: {
    backgroundColor: "#8bc34a",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnFive: {
    backgroundColor: "#fab733",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnSix: {
    backgroundColor: "#ff8e15",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnSeven: {
    backgroundColor: "#ff4e11",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnEight: {
    backgroundColor: "#ff4e11",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnNine: {
    backgroundColor: "#ff0d0d",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  btnTen: {
    backgroundColor: "#ff0d0d",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "black",
    },
  },
});

const CreateWorkouts = ({ workoutId, setWorkoutId }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  // const workoutToBeUpdated = useSelector((state) =>
  //   workoutId ? state.workouts.find((w) => w._id === workoutId) : null
  // );
  const user = JSON.parse(localStorage.getItem("profile"));
  const [workout, setWorkout] = useState({
    trainingType: "",
    trainingDuration: "",
    firstName: "",
    lastName: "",
    comments: "",
    location: "",
    rpe: 1,
    createdAt: new Date(),
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (workoutId) {
      dispatch(updateWorkout(workoutId, workout));
    } else {
      dispatch(createWorkout(workout));
    }

    history.push("/");
  };

  return (
    <>
      <Container>
        <Grid container direction="column">
          <Grid zeroMinWidth xs={12} sm={12} md={6} item>
            <Typography variant="h6" color="textSecondary">
              Edit Workout of the Day
            </Typography>
          </Grid>
          <Grid zeroMinWidth xs={12} sm={12} md={6} item>
            <form onSubmit={handleSubmit}>
              <Grid direction="column" container>
                <Grid item>
                  <TextField
                    onChange={(e) =>
                      setWorkout({
                        ...workout,
                        trainingType: e.target.value,
                        firstName: user.result.firstName,
                        lastName: user.result.lastName,
                      })
                    }
                    size="small"
                    value={workout.trainingType}
                    className={classes.textField}
                    variant="outlined"
                    label="Training method (weights, running, swimming, etc)"
                    color="secondary"
                    fullWidth
                    required
                  />
                  <TextField
                    onChange={(e) =>
                      setWorkout({
                        ...workout,
                        trainingDuration: e.target.value,
                      })
                    }
                    value={workout.trainingDuration}
                    className={classes.textField}
                    variant="outlined"
                    label="Training duration (hrs)"
                    color="secondary"
                    fullWidth
                    required
                  />
                  <TextField
                    onChange={(e) =>
                      setWorkout({ ...workout, location: e.target.value })
                    }
                    value={workout.location}
                    className={classes.textField}
                    variant="outlined"
                    label="Training location? Gym, park, home, etc."
                    color="secondary"
                    fullWidth
                    required
                  />
                  <TextField
                    onChange={(e) =>
                      setWorkout({ ...workout, comments: e.target.value })
                    }
                    value={workout.comments}
                    className={classes.textField}
                    variant="outlined"
                    label="Share your thoughts on how it went!"
                    fullWidth
                    required
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="textSecondary">
                    Difficulty
                  </Typography>
                </Grid>
                <Grid item>
                  <ButtonGroup variant="contained">
                    <Button
                      classes={{
                        root: classes.btnOne,
                      }}
                      // className={classes.btnOne}
                      startIcon={<MoodIcon />}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      1
                    </Button>{" "}
                    <Button
                      classes={{
                        root: classes.btnTwo,
                      }}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      2
                    </Button>{" "}
                    <Button
                      classes={{
                        root: classes.btnThree,
                      }}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      3
                    </Button>{" "}
                    <Button
                      classes={{
                        root: classes.btnFour,
                      }}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      4
                    </Button>
                    <Button
                      classes={{
                        root: classes.btnFive,
                      }}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      5
                    </Button>
                    <Button
                      classes={{
                        root: classes.btnSix,
                      }}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      6
                    </Button>
                    <Button
                      classes={{
                        root: classes.btnSeven,
                      }}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      7
                    </Button>
                    <Button
                      classes={{
                        root: classes.btnEight,
                      }}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      8
                    </Button>
                    <Button
                      classes={{
                        root: classes.btnNine,
                      }}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      9
                    </Button>
                    <Button
                      classes={{
                        root: classes.btnTen,
                      }}
                      startIcon={<SentimentVeryDissatisfiedOutlinedIcon />}
                      onClick={handleRPE}
                      value={workout.rpe}
                    >
                      10
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.textField}
                    color="secondary"
                    type="submit"
                    variant="contained"
                  >
                    Update!
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          {/* <Form onSubmit={handleSubmit} className="Grid mt-5 mr-5">
            <Button
              className="allbuttons mt-3"
              variant="primary"
              type="submit"
              size="sm"
            >
              Submit
            </Button>
          </Form> */}
        </Grid>
      </Container>
    </>
  );
};

export default CreateWorkouts;
