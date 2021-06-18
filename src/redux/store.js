// // redux related imports
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// // redux store initialization
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(compose(applyMiddleware(thunk)))
// );

// export default store;

// creates store that holds state, combines reducers and has built in middleware
// this file gets called beginning of app lifecycle
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import workoutsSlice from "../redux/workouts/workoutsSlice";
const reducer = combineReducers({
  workoutsSlice: workoutsSlice,
});

// pass in our reducers to configure store
const store = configureStore({
  reducer,
});

// setups a listener that is constantly running in background and watches for any dispatched redux actions
// sagaMiddleWare.run(watcherSaga);

export default store;
