import React from "react";

//styles
import {
  Typography,
  Button,
  ButtonGroup,
  makeStyles,
  TextField,
} from "@material-ui/core";
import AdbOutlinedIcon from "@material-ui/icons/AdbOutlined";

//Made this a reusable component
//Passed handleDelete function and all of the necessary arguments as props to this component if user is trainer and loading client workouts - to check this I made sure there was both a trainer and client email. If this check failed, no button would be rendered meaning a client was logged in
//Anytime we got workouts and needed to display them, this component is used
const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "orange",
    },
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const RenderWorkout = ({
  workout: {
    trainingType,
    trainingDuration,
    comments,
    location,
    id,
    rpe,
    firstName,
    lastName,
  },
  handleDelete,
}) => {
  const classes = useStyles();
  // function capitalizeFirstLetter(string) {
  //   if (string) {
  //     return string[0].toUpperCase() + string.slice(1);
  //   } else {
  //     return;
  //   }
  // }
  // const capitalName = capitalizeFirstLetter(liftName);

  return (
    <>
      <Typography variant="h6" component="h2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        placeat vero cumque modi omnis minima dolorem, et reiciendis beatae
        fugiat!
      </Typography>

      <ButtonGroup color="primary" variant="contained">
        <Button className={classes.btn}>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <AdbOutlinedIcon color="error" />

      <form>
        <TextField
          className={classes.field}
          fullWidth
          variant="outlined"
          label="Workout"
        />
        <TextField
          className={classes.field}
          fullWidth
          variant="outlined"
          label="Workout"
          multiline
          rows={4}
        />
      </form>
    </>

    // <div className="card__main">
    //   <div className="card__container">
    //     <div className="card__image"></div>
    //     <div className="card__text-container">
    //       <h1 className="card__name">{firstName + " " + lastName}</h1>
    //       <p className="card__content">{comments}</p>
    //     </div>
    //   </div>
    // </div>

    // <tr>
    //   <td>{capitalName}</td>
    //   <td>{sets}</td>
    //   <td>{reps}</td>
    //   <td>{weight}</td>
    //   <td>
    //     <Link to={`/update/${id}`}>Edit</Link>
    //   </td>
    //   <td>
    //     <Button
    //       className="allbuttons"
    //       variant="danger"
    //       onClick={() => handleDelete(id)}
    //       type="button"
    //       size="sm"
    //     >
    //       Delete
    //     </Button>
    //   </td>
    // </tr>
  );
};

export default RenderWorkout;
