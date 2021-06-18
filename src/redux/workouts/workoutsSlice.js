import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

export const fetchWorkoutAsync = createAsyncThunk(
  "workouts/fetchWorkoutAsync",
  async (workoutId) => {
    try {
      const response = await api.fetchWorkout(workoutId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchWorkoutsAsync = createAsyncThunk(
  "workouts/fetchWorkoutsAsync",
  async () => {
    try {
      const response = await api.fetchWorkouts();

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createWorkoutAsync = createAsyncThunk(
  "workouts/createWorkoutAsync",
  async (workout) => {
    try {
      await api.createWorkout(workout);
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteWorkoutAsync = createAsyncThunk(
  "workouts/deleteWorkoutAsync",
  async (workout) => {
    try {
      await api.deleteWorkout(workout);
      // payload is workoutId that gets compared in findIndex method in reducer
      return workout;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateWorkoutAsync = createAsyncThunk(
  "workouts/updateWorkoutAsync",
  async (workoutId, workout) => {
    try {
      const response = await api.updateWorkout(workoutId, workout);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    isLoading: false,
    workouts: [],
    error: "",
  },
  reducers: {
    // createWorkout: (state, action) => {
    //   state.isLoading = true;
    //   state.workouts.push(action.payload);
    // },
  },
  extraReducers: {
    [fetchWorkoutAsync.fulfilled]: (state, action) => {
      state.workouts = action.payload;
      state.isLoading = false;
    },
    [fetchWorkoutAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchWorkoutAsync.rejected]: (state, { payload, error }) => {
      state.workouts = payload.workouts;
      state.isLoading = false;
      state.error = error;
    },
    [fetchWorkoutsAsync.fulfilled]: (state, action) => {
      state.workouts = action.payload.workouts;
      state.isLoading = false;
    },
    [fetchWorkoutsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchWorkoutsAsync.rejected]: (state, { payload, error }) => {
      state.workouts = payload.workouts;
      state.isLoading = false;
      state.error = error;
    },
    [createWorkoutAsync.fulfilled]: (state, action) => {
      state.workouts.push(action.payload);
      state.isLoading = false;
    },
    [createWorkoutAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createWorkoutAsync.rejected]: (state, { meta, payload, error }) => {
      state.isLoading = false;
      state.workouts = payload;
      state.error = error;
    },
    [updateWorkoutAsync.fulfilled]: (state, action) => {
      state.workouts = action.payload.workouts;
      state.isLoading = false;
    },

    // CANNOT USE FILTER METHOD, AS IT MAKES NEW ARRAY AND DOES NOT MUTATE ORIGINAL ARRAY
    // REDUX TOOLKIT USES IMMER WHICH EXPECTS YOU WILL EITHER MUTATE EXISTING STATE OR CONSTRUCT NEW STATE VALUE YOURSELF AND RETURN IT, NOT BOTH!
    [deleteWorkoutAsync.fulfilled]: (state, action) => {
      state.workouts.splice(
        state.workouts.findIndex((workout) => workout.id === action.payload),
        1
      );
    },
    [deleteWorkoutAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteWorkoutAsync.rejected]: (state, { meta, payload, error }) => {
      state.isLoading = false;
      state.workouts = payload;
      state.error = error;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { createWorkout } = workoutsSlice.actions;

export default workoutsSlice.reducer;
