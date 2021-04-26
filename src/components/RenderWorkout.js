import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//Made this a reusable component
//Passed handleDelete function and all of the necessary arguments as props to this component if user is trainer and loading client workouts - to check this I made sure there was both a trainer and client email. If this check failed, no button would be rendered meaning a client was logged in
//Anytime we got workouts and needed to display them, this component is used

const RenderWorkout = ({
  exercise: { liftName, sets, reps, weight, id },
  handleDelete,
}) => {
  function capitalizeFirstLetter(string) {
    if (string) {
      return string[0].toUpperCase() + string.slice(1);
    } else {
      return;
    }
  }
  const capitalName = capitalizeFirstLetter(liftName);

  return (
    <tr>
      <td>{capitalName}</td>
      <td>{sets}</td>
      <td>{reps}</td>
      <td>{weight}</td>
      <td>
        <Link to={`/update/${id}`}>Edit</Link>
      </td>
      <td>
        <Button
          className="allbuttons"
          variant="danger"
          onClick={() => handleDelete(id)}
          type="button"
          size="sm"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default RenderWorkout;
