import { combineReducers } from "redux";

// reducers
import { workoutsReducer } from "./workouts/workoutsReducer";
import { usersReducer } from "./users/usersReducer";

const rootReducer = combineReducers({
  workouts: workoutsReducer,
  users: usersReducer,
});

export default rootReducer;
