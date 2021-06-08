// action types
import { SIGNUP, SIGNIN, LOGOUT } from "./usersTypes";

// dependencies
import * as api from "../../api/index.js";

// Action creator
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({
      type: SIGNUP,
      payload: data,
    });
  } catch (error) {
    console.log("signup error");
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in user
    const { data } = await api.signin(formData);
    dispatch({
      type: SIGNIN,
      payload: data,
    });

    history.push("/");
  } catch (error) {
    console.log("signin error");
  }
};
