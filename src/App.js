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
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./styles/App.scss";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: "0.8rem",
      },
    },
    MuiListItemText: {
      root: {
        fontSize: "0.8rem",
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Navigation /> */}
        <Layout>
          <Switch>
            <Route path="/" exact component={Workouts} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/update/:workoutId" component={EditWorkouts} />
            <Route path="/createWorkout" exact component={CreateWorkouts} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
