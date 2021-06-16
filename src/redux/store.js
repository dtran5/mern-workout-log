// redux related imports
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// redux store initialization
const store = createStore(
  rootReducer,
  composeWithDevTools(compose(applyMiddleware(thunk)))
);

export default store;
