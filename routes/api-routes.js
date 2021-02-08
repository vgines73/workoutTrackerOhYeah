
const Workout = require("../models/workout")
// look for public/api.js for all fetch requests.
module.exports = (app) => {
    // to find last workout 
    app.get("/api/workouts", (req, res) => {
          // console.log(req.body)
        Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    // to add update an exercise by id
    app.put("/api/workouts/:id", (req, res) => {
        //console.log(req.body, req.params.id)
        Workout.updateOne( 
            {
                _id: req.params.id,
            },
            {
                $set: {
                    
                    exercises: req.body.exercises,
                    day: Date.now(),
                   
                }
            }
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
        Workout.create({})
        .then(data => {
           // console.log(data)
           res.json(data);
           res.send("hello from create post")
           
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
      
    app.get("/api/workouts/range"), (req, res) => {
        // console.log(res)
        Workout.find({})
        
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        }); 
    }

};

