const express = require("express");
const { check } = require("express-validator");

const workoutControllers = require("../controllers/workout-controller");

const router = express.Router();
//GET ALL WORKOUTS
router.get("/", workoutControllers.getWorkouts);
//GET ONE WORKOUT BY ID
router.get("/:workoutId", workoutControllers.getWorkoutById);
//MAKE A NEW WORKOUT
router.post(
  "/",
  [
    check("liftName").trim().notEmpty(),
    check("sets").trim().not().isEmpty().isNumeric(),
    check("reps").trim().not().isEmpty().isNumeric(),
    check("weight").trim().not().isEmpty().isNumeric(),
  ],
  workoutControllers.createWorkout
);

//EDIT A WORKOUT BY ID
router.patch(
  "/update/:workoutId",
  [
    check("liftName").trim().notEmpty().isLength({ min: 5 }),
    check("sets").trim().not().isEmpty().isNumeric(),
    check("reps").trim().not().isEmpty().isNumeric(),
    check("weight").trim().not().isEmpty().isNumeric(),
  ],
  workoutControllers.updateWorkoutById
);
//DELETE A WORKOUT
router.delete("/:workoutId", workoutControllers.deleteWorkoutById);

//nodejs export syntax
//this means the thing which we export in this file is this router constant
module.exports = router;
