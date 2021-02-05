// require dependencies
const express = require("express");
const mongoose = require("mongoose");

// set up PORT
const PORT = process.env.PORT || 3000;

// set up express
const app = express();

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static("public"));


// front end route
const htmlRouter = require("./routes/html-routes");
// back end route
const apiRouter = require("./routes/api-routes");

// invoke routes
htmlRouter(app);
apiRouter(app);

// connect to database
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// listening on port
app.listen(PORT, () => {
    console.log(`App running on PORT http://localhost:${PORT}`);
});

