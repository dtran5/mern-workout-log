import React from "react";
//dependencies
import { format, parseISO } from "date-fns";
// styles
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  icon: {
    fontSize: "0.9rem",
    marginRight: "0.1rem",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "-1.5rem",
    marginTop: "1rem",
  },
  contentSize: {
    fontSize: "0.9rem",
  },
  footerSize: {
    fontSize: "0.8rem",
  },
});

const WorkoutCard = ({
  workout: {
    trainingType,
    trainingDuration,
    comments,
    location,
    id,
    rpe,
    firstName,
    lastName,
    createdAt,
  },
}) => {
  const classes = useStyles();

  let formatted;
  const formatDate = (createdAt) => {
    const parsed = parseISO(createdAt);
    formatted = format(parsed, "M/d/Y h:maaa");
  };

  formatDate(createdAt);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton>
              <FavoriteBorderIcon color="secondary" />
            </IconButton>
          }
          title={trainingType}
        />
        <CardContent>
          <Typography
            className={classes.contentSize}
            color="textSecondary"
            variant="body2"
          >
            {comments}
          </Typography>

          <CardActions className={classes.actions}>
            <Typography
              className={classes.footerSize}
              color="textSecondary"
              variant="body2"
            >
              <LocationOnIcon className={classes.icon} />
              {location}
            </Typography>
            <Typography
              className={classes.footerSize}
              color="textSecondary"
              variant="body2"
            >
              <QueryBuilderOutlinedIcon className={classes.icon} />
              {trainingDuration >= 2
                ? "Workout was " + trainingDuration + " hours in length."
                : "Workout was " + trainingDuration + " hour in length"}
            </Typography>
            <Typography
              className={classes.footerSize}
              color="textSecondary"
              variant="body2"
            >
              <QueryBuilderOutlinedIcon className={classes.icon} />
              {"Date posted: " + formatted}
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutCard;
