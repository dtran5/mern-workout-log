import {
  // FETCH_SINGLE_WORKOUT,
  FETCH_ALL_WORKOUTS,
  CREATE_WORKOUT,
  // UPDATE_WORKOUT,
  DELETE_WORKOUT,
  LOADING,
  NOT_LOADING,
} from "./workoutsTypes";

const initialState = {
  isLoading: true,
  workouts: [],
};

export const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true };
    case NOT_LOADING:
      return { ...state, isLoading: false };
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
    case DELETE_WORKOUT:
      console.log(action.payload);
      console.log(state);
      return {
        ...state,
        workouts: state.workouts.workouts.workouts.filter(
          (workout) => workout._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// export const workoutsReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case FETCH_SINGLE_WORKOUT:
//       return { ...state, workouts: action.payload };
//     case FETCH_ALL_WORKOUTS:
//       return { ...state, workouts: action.payload };
//     case CREATE_WORKOUT:
//       return { ...state, workouts: action.payload };
//     case UPDATE_WORKOUT:
//       return {
//         ...state,
//         workouts: state.workouts.workouts.map((workout) =>
//           workout._id === action.payload._id ? action.payload : workout
//         ),
//       };
//     case DELETE_WORKOUT:
//       return {
//         ...state,
//         workouts: state.workouts.filter(
//           (workout) => workout._id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };
