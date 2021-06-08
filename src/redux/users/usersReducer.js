import { SIGNUP, SIGNIN, LOGOUT } from "./usersTypes";

export const usersReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case SIGNUP:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));

      return { ...state, authData: action.payload };
    case SIGNIN:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...state, authData: action.payload };
    case LOGOUT: {
      localStorage.clear();
      return { ...state, authData: null };
    }
    default:
      return state;
  }
};
