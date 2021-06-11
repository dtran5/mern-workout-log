import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
});

// function that occurs on each request
// happens before our requests below - sends token to backend so backend middleware can verify
// that  we are logged in
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    // place token here that was grabbed in auth middleware
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);

export const fetchWorkouts = () => API.get("/workouts");
export const createWorkout = (newWorkout) => API.post("/workouts", newWorkout);
