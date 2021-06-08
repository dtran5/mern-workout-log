import React, { useEffect } from "react";
// react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Signup from "./components/forms/Signup";
import Navigation from "./components/navigation/Navigation";
import Workouts from "./components/Workouts";
import EditWorkouts from "./components/EditWorkouts";
import CreateWorkouts from "./components/CreateWorkouts";
// styles
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Workouts} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/update/:workoutId" component={EditWorkouts} />
        <Route path="/createWorkout" exact component={CreateWorkouts} />
      </Switch>
    </Router>
  );
}

export default App;
