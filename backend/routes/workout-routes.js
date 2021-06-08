const express = require("express");
const { check } = require("express-validator");
// middleware
const auth = require("../middleware/auth.js");

// controller
const workoutControllers = require("../controllers/workout-controller");

const router = express.Router();
// GET ALL WORKOUTS
router.get("/", workoutControllers.getWorkouts);
// GET ONE WORKOUT BY ID
router.get("/:workoutId", workoutControllers.getWorkoutById);
// MAKE A NEW WORKOUT
router.post(
  "/",
  auth,
  // [
  //   check("exerciseActivity").trim().notEmpty(),
  //   check("exef").trim().not().isEmpty().isNumeric(),
  //   check("reps").trim().not().isEmpty().isNumeric(),
  //   check("weight").trim().not().isEmpty().isNumeric(),
  // ],
  workoutControllers.createWorkout
);

// EDIT A WORKOUT BY ID
router.patch(
  "/update/:workoutId",
  auth,
  // [
  //   check("liftName").trim().notEmpty().isLength({ min: 5 }),
  //   check("sets").trim().not().isEmpty().isNumeric(),
  //   check("reps").trim().not().isEmpty().isNumeric(),
  //   check("weight").trim().not().isEmpty().isNumeric(),
  // ],
  workoutControllers.updateWorkoutById
);
// DELETE A WORKOUT
router.delete("/:workoutId", auth, workoutControllers.deleteWorkoutById);

// nodejs export syntax
// this means the thing which we export in this file is this router constant
module.exports = router;
