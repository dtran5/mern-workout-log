import React, { useState, useEffect } from "react";
//dependencies
import { format, parseISO } from "date-fns";
import { useHistory, Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import {
  deleteWorkoutAsync,
  fetchWorkoutsAsync,
} from "../redux/workouts/workoutsSlice";
// styles
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  icon: {
    fontSize: "1rem",
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

const ITEM_HEIGHT = 48;

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
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [workout, setWorkout] = useState({
    trainingType: trainingType,
    trainingDuration: trainingDuration,
    firstName: firstName,
    lastName: lastName,
    comments: comments,
    location: location,
    rpe: rpe,
  });
  const [anchorElement, setAnchorElement] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchWorkoutsAsync());
  }, [dispatch]);

  const handleClick = (e) => {
    setAnchorElement(e.currentTarget);
    setOpen(true);
  };

  const handleUpdate = () => {
    // console.log(workout);
  };

  const handleDelete = (e) => {
    dispatch(deleteWorkoutAsync(id));
  };

  const toggleMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      return;
    }
  };

  const handleClose = (e) => {
    setAnchorElement(null);
  };

  // let formatted;
  // const formatDate = (createdAt) => {
  //   const parsed = parseISO(createdAt);
  //   formatted = format(parsed, "M/d/Y h:maaa");
  // };

  // formatDate(createdAt);

  return (
    <div onClick={toggleMenu}>
      <Card elevation={1}>
        <CardHeader
          action={
            <>
              <IconButton>
                <FavoriteBorderIcon color="secondary" />
              </IconButton>
              <IconButton onClick={handleClick}>
                <Menu
                  id="long-menu"
                  anchorEl={anchorElement}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  <Link to={`/update/${id}`}>
                    <MenuItem onClick={handleUpdate}>Update</MenuItem>
                  </Link>
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
                <MoreVertIcon className={classes.icon} />
              </IconButton>
            </>
          }
          title={trainingType}
          subheader={
            trainingDuration >= 2
              ? "for " + trainingDuration + " hours"
              : "for " + trainingDuration + " hour"
          }
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
            ></Typography>
            {/* <Typography
              className={classes.footerSize}
              color="textSecondary"
              variant="body2"
            >
              <QueryBuilderOutlinedIcon className={classes.icon} />
              {"Date posted: " + formatted}
            </Typography> */}
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutCard;
