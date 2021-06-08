const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  liftName: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  selectedFile: { type: String, required: false },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Workout", workoutSchema);
