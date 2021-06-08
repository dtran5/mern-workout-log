import axios from "axios";

const workoutsUrl = "http://localhost:4000/workouts";

export const signin = (formData) =>
  axios.post("http://localhost:4000/user/signin", formData);
export const signup = (formData) =>
  axios.post("http://localhost:4000/user/signup", formData);

export const fetchWorkouts = () => axios.get(workoutsUrl);
export const createWorkout = (newWorkout) =>
  axios.post(workoutsUrl, newWorkout);
