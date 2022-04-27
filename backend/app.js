//ENV variables for clean connection
const dotenv = require('dotenv');
dotenv.config();

// Express and bodyParser for connection
const express = require("express");
const bodyParser = require("body-parser");

//Sessions
const getRoutes = require("./crud-operations/routes/crud-routes");

const app = express();

app.use(bodyParser.json());

//CORS option for the backend
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  
    next();
  });

  //API - SESSIONS
app.use("/api", getRoutes);



  //Routes not found
app.use((req, res, next) => {
    const error = new HttpError("Could not find this route", 404);
    throw error;
  });
  

app.listen(3007, () => {
    console.log(`App running on port 3007.`)
  })
  