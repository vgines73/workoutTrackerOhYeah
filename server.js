// require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// set up PORT
const PORT = process.env.PORT || 3000;

// set up express
const app = express();

app.use(logger("dev"));
// set up express app to handle data parsing; setting up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static("public"));
// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
console.log(process.env.MONGODB_URI)



// front end route
const htmlRouter = require("./routes/html-routes");
// back end route
const apiRouter = require("./routes/api-routes");

// invoke routes
htmlRouter(app);
apiRouter(app);


// listening on port
app.listen(PORT, () => {
    console.log(`App running on PORT http://localhost:${PORT}`);
});

