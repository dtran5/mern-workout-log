import React, { useState, useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/users/usersTypes";
// dependencies
import decode from "jwt-decode";
// styles
import { Navbar, Nav } from "react-bootstrap";
// react-router
import { useHistory, useLocation, NavLink } from "react-router-dom";

function Navigation() {
  // location helps track logout/signin on navbar
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  // retrieving our user from local storage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    history.push("/signup");
    setUser(null);
  };
  console.log(user);
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <NavLink to="/">Exercise Share</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {user ? (
            <NavLink className="mx-3" to="/createWorkout">
              Create Workout
            </NavLink>
          ) : (
            ""
          )}

          <NavLink className="mx-3" to="/signup">
            Register
          </NavLink>
          {user?.result ? (
            <NavLink onClick={handleLogout} className="mx-3" to="/signup">
              Logout
            </NavLink>
          ) : (
            <NavLink className="mx-3" to="/signup">
              Sign in
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
