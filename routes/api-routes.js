
const Workout = require("../models/workout");
// look for public/api.js for all fetch requests. 
module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        Workout.getLastWorkout()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    app.put("/api/workouts/" + id), (req, res) => {
        console.log(res)
        Workout.addExercise(id) 

    }

    app.post("/api/workouts", ({ body }, res) => {
        console.log(body)
        Workout.createWorkout(body)
        
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
      
    app.get("/api/workouts/range"), (req, res) => {
        console.log(res)
    }

};

