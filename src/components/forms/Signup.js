import React, { useState } from "react";
// react-router
import { Link, useHistory } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { signin, signup } from "../../redux/users/usersActions";
// styles
import { Card, Form, Button, Container } from "react-bootstrap";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      dispatch(signin(formData, history));
    } else {
      dispatch(signup(formData, history));
    }
  };

  const switchForms = () => {
    setFormData(initialState);
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">
                  {isSignIn ? "Login" : "Sign Up"}
                </h2>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <Form onSubmit={handleSubmit}>
                  {isSignIn ? (
                    <>
                      <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          name="email"
                          type="email"
                          required
                        />
                      </Form.Group>
                      <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          name="password"
                          type="password"
                          required
                        />
                      </Form.Group>
                    </>
                  ) : (
                    <>
                      <Form.Group id="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          name="firstName"
                          type="text"
                          required
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group id="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          name="lastName"
                          type="text"
                          required
                        />
                      </Form.Group>
                      <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          name="email"
                          type="email"
                          required
                        />
                      </Form.Group>
                      <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          name="password"
                          type="password"
                          required
                        />
                      </Form.Group>
                      <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              confirmPassword: e.target.value,
                            })
                          }
                          name="confirmPassword"
                          type="password"
                          required
                        />
                      </Form.Group>
                    </>
                  )}
                  <Button disabled={loading} className="w-100" type="submit">
                    {isSignIn ? "Sign In" : "Sign Up"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              <Button onClick={switchForms}>
                {isSignIn
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in "}
              </Button>
            </div>
          </div>
        }
      </Container>
    </>
  );
};

export default Signup;
