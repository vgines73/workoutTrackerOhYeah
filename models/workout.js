const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// all data info needed was in seed.js
const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Type of Exercise"
  },
  name: {
    type: String,
    trim: true,
    required: "Name of Exercise"
  },
  duration: {
    type: Number,
    trim: true,
    required: "Length of Exercise"
  },
  weight: {
    type: Number,
    trim: true,
    required: "How much weight did you use?"
  },
  reps: {
    type: Number,
    trim: true,
    required: "Number of reps"
  },
  sets: {
    type: Number,
    trim: true,
    required: "Number of sets"
  },
});

const Workout = mongoose.model("Worout", workoutSchema);

module.exports = Workout;