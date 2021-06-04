import { combineReducers } from "redux";

// reducers
import { workoutsReducer } from "./workouts/workoutsReducer";

const rootReducer = combineReducers({
  workouts: workoutsReducer,
});

export default rootReducer;
