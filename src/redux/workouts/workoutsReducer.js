import { FETCH_ALL_WORKOUTS, CREATE_WORKOUT } from "./workoutsTypes";

const initialState = {
  loading: false,
  workouts: [],
};

export const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_WORKOUTS:
      return {
        ...state,
        workouts: action.payload,
      };
    case CREATE_WORKOUT:
      return {
        ...state,
        workouts: action.payload,
      };
    default:
      return state;
  }
};
