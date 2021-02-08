
const Workout = require("../models/workout")
// look for public/api.js for all fetch requests.
module.exports = (app) => {
    // to find last workout 
    app.get("/api/workouts", (req, res) => {
        // console.log(req.body)
        Workout.find()
        Workout.aggregate([
            {"$addFields": {
                "totalDuration":{
                    "$sum": "$exercises.duration"
                }
            }}
        ])
            .sort({ date: -1 })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    // to add update an exercise by id
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body, req.params.id)
        Workout.findOneAndUpdate(
            {_id: req.params.id},
            {
                $push: { 
                    exercises: req.body
                },
                
            },
            {new: true},
        )
            .then(data => {
                // console.log(data)
                res.json(data);

            })
            .catch(err => {
                res.status(400).json(err);
            });

    });
    // to create a workout
    app.post("/api/workouts", (req, res) => {
        // console.log(req.body, req.params)
        Workout.create(
            {
                exercises: req.body.exercises,
                day: Date.now(),
            },
            )
            .then(data => {
                console.log("DATA: " + data)
                res.json(data);
                // res.send("hello from create post")

            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        // res.send("HELLO");
        Workout.find({})
        Workout.aggregate([
            {"$addFields": {
                "totalDuration":{
                    "$sum": "$exercises.duration"
                }
            }}
        ]).then(data => {
            console.log(data)
            res.json(data);
        })
            .catch(err => {
                res.status(400).json(err);
            });
    })

};

