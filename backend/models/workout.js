const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  trainingType: { type: String, required: true },
  trainingDuration: { type: Number, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  comments: { type: String, required: true },
  location: { type: String, required: true },
  rpe: { type: Number, required: true },
  selectedFile: { type: String, required: false },
});

module.exports = mongoose.model("Workout", workoutSchema);
