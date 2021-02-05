
const Workout = require("../models/workout");

module.exports = (app) => {
    app.post("/api/workouts", ({ body }, res) => {
        console.log(body)
        Workout.create()
        
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
      
    app.get("/api/workouts", (req, res) => {
        Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
};

