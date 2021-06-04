import React, { useEffect } from "react";
// react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { getWorkouts } from "./redux/workouts/workoutsActions";

// components
import Navigation from "./components/navigation/Navigation";
import Workouts from "./components/Workouts";
import EditWorkouts from "./components/EditWorkouts";
import CreateWorkouts from "./components/CreateWorkouts";
// styles
import "./styles/App.scss";

function App() {
  // define dispatch that allows dispatching of actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Workouts} />
        <Route path="/update/:workoutId" component={EditWorkouts} />
        <Route path="/createWorkout" exact component={CreateWorkouts} />
      </Switch>
    </Router>
  );
}

export default App;
