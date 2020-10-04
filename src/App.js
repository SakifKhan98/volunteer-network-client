import React, { createContext, useState } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SelectedActivities from "./components/SelectedActivities/SelectedActivities";
import VolunteerRegister from "./components/VolunteerRegister/VolunteerRegister";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  // const [selectedActivity, setSelectedActivity] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <PrivateRoute path="/volunteerRegister">
            <VolunteerRegister></VolunteerRegister>
          </PrivateRoute> */}
          <PrivateRoute path="/volunteerRegister/:activityId">
            <VolunteerRegister></VolunteerRegister>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/selectedActivities">
            <SelectedActivities></SelectedActivities>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
