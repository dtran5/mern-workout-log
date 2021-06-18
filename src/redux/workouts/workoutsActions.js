// // action types
// import {
//   FETCH_ALL_WORKOUTS,
//   CREATE_WORKOUT,
//   LOADING,
//   NOT_LOADING,
//   DELETE_WORKOUT,
// } from "./workoutsTypes";
// // dependencies

// import * as api from "../../api/index.js";

// // Action creator
// export const getWorkouts = () => async (dispatch) => {
//   try {
//     dispatch({ type: LOADING });
//     const { data } = await api.fetchWorkouts();
//     dispatch({
//       type: FETCH_ALL_WORKOUTS,
//       payload: data,
//     });
//     dispatch({ type: NOT_LOADING });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // export const createWorkout = (workout) => async (dispatch) => {
// //   try {
// //     dispatch({ type: LOADING });
// //     const { data } = await api.createWorkout(workout);
// //     dispatch({
// //       type: CREATE_WORKOUT,
// //       payload: data,
// //     });
// //     dispatch({ type: NOT_LOADING });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// export const deleteWorkout = (id) => async (dispatch) => {
//   try {
//     await api.deleteWorkout(id);
//     dispatch({ type: DELETE_WORKOUT, payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };
