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
  return res.status(404).json({ error: "Could not find this route" });
  });
  

app.listen(3008, () => {
    console.log(`App running on port 3008.`)
  })
  