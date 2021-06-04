// action types
import { FETCH_ALL_WORKOUTS, CREATE_WORKOUT } from "./workoutsTypes";
// dependencies
import axios from "axios";
import * as api from "../../api/index.js";

// Action creator
export const getWorkouts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkouts();
    dispatch({
      type: FETCH_ALL_WORKOUTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createWorkout = (workout) => async (dispatch) => {
  try {
    const { data } = await api.createWorkout(workout);
    dispatch({
      type: CREATE_WORKOUT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
