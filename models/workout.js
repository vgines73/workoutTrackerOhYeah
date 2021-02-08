const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// all data info needed was in seed.js
const workoutSchema = new Schema({
    exercises: [{
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
            required: "Duration in Minutes"

        },
        weight: {
            type: Number,

        },
        reps: {
            type: Number,

        },
        sets: {
            type: Number,

        },
        distance: {
            type: Number,

        },
    }],
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number
    }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;