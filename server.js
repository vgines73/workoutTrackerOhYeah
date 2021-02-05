// require dependencies

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true

});

app.listen(PORT, () => {
    console.log(`App running on PORT http://localhost:${PORT}`);
});

