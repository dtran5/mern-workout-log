import React from "react";
import "./styles/App.scss";
import Navigation from "./components/navigation/Navigation";
import Workouts from "./components/Workouts";
import EditWorkouts from "./components/EditWorkouts";
import CreateWorkouts from "./components/CreateWorkouts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  console.log("works");
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
