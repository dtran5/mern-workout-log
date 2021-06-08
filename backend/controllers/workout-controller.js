const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");
const Workout = require("../models/workout");

const getWorkouts = async (req, res, next) => {
  let workouts;
  try {
    workouts = await Workout.find();
    res.status(200);
  } catch (err) {
    const error = new HttpError(
      "Could not find workouts with this userId",
      404
    );
    return next(error);
  }

  if (!workouts || workouts.length === 0) {
    //set our status if theres an error
    //return prevents any further code from executing

    return next(new Error("Could not find any workouts", 404));
  }

  res.json({
    workouts: workouts.map((workout) => workout.toObject({ getters: true })),
  });
};

const getWorkoutById = async (req, res, next) => {
  const workoutId = req.params.workoutId;
  //using the mongoose find which returns an array directly
  //block scoping forces us to declare this outside the trycatch block
  let workout;
  try {
    workout = await Workout.findById(workoutId);
  } catch (err) {
    const error = new HttpError("Could not find workouts with this Id", 404);
    return next(error);
  }

  if (!workout) {
    // set our status if theres an error
    // return prevents any further code from executing
    throw new HttpError("Could not find a workout for provided id", 404);
  }
  // send back a reponse to our browser
  // the object that is returned is a mongoose object so we want to convert it to a regular object
  // then we want to get rid of the _ in _id in the properties so we set getters to true
  res.json({ workout: workout.toObject({ getters: true }) });
};

const createWorkout = async (req, res, next) => {
  // call validationResult from express validator and pass the request to it - this function looks into the req object and see if there are any validation errors which were detected by our setup in the routes and returns us an errors object and we check if it is empty or not
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs pass, please check them again", 422);
  }
  // we can get this body data because we parsed it in the middleware function bodyParser
  // extracting data from the incoming request
  const { liftName, sets, reps, weight } = req.body; // essentially const liftName = req.body.liftName
  const newWorkout = new Workout({
    liftName: liftName,
    sets: sets,
    reps: reps,
    weight: weight,
  });

  try {
    await newWorkout.save();
  } catch (err) {
    const error = new HttpError("Could not create workout", 500);
    return next(error);
  }

  res.status(201).json({ workout: newWorkout });
};

const updateWorkoutById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs pass, please check them again", 422)
    );
  }

  const { liftName, sets, reps, weight } = req.body;
  const workoutId = req.params.workoutId;

  let workout;
  try {
    workout = await Workout.findById(workoutId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update workout",
      500
    );
    return next(error);
  }

  workout.liftName = liftName;
  workout.sets = sets;
  workout.reps = reps;
  workout.weight = weight;

  //need to make sure the updated info is saved again in our db
  try {
    await workout.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update workout",
      500
    );
    return next(error);
  }

  res.status(200).json({ workout: workout.toObject({ getters: true }) });

  //make a copy of the workout object and then update that
};

const deleteWorkoutById = async (req, res, next) => {
  const workoutId = req.params.workoutId;
  //return true and keep the workout and if they ids do match then it returns false and we drop the workout from the newly return array which in turn overwrites the old array

  //check to make sure we have a place before we delete it
  let workout;
  try {
    //populate allows us to refer to a document stored in another collection and to work with data in that existing document - need a relation between these 2 documents - this was established in our user.js file with ref: Workout and in workout.js with ref: User
    //populate needs the specific document we are changing and a specific property which is creator for us because it contains the userId
    workout = await Workout.findById(workoutId);
  } catch (err) {
    const error = new HttpError("Could not delete this workout by Id", 500);
    return next(error);
  }

  //need to check whether a workout actually exists before we can delete it
  if (!workout) {
    const error = new HttpError("Could not find workout for this id", 404);
    return next(error);
  }

  try {
    await workout.remove();
  } catch (err) {
    const error = new HttpError("Could not delete workout", 500);
    return next(error);
  }

  res.status(200).json({ message: "Workout deleted" });
};

exports.getWorkouts = getWorkouts;
exports.getWorkoutById = getWorkoutById;
exports.createWorkout = createWorkout;
exports.updateWorkoutById = updateWorkoutById;
exports.deleteWorkoutById = deleteWorkoutById;
