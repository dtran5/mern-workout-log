const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const workoutRoutes = require("./routes/workout-routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/workouts", workoutRoutes);

mongoose
  //pass in our mongodb credentials to connect
  .connect(process.env.MONGO_URL, {
    //added because if remove the old methods are deprecated
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
    console.log("connected on " + PORT);
  })
  .catch((error) => {
    console.log(error.message);
  });
