import axios from "axios";

const url = "http://localhost:4000/workouts";

export const fetchWorkouts = () => axios.get(url);
export const createWorkout = (newWorkout) => axios.post(url, newWorkout);
