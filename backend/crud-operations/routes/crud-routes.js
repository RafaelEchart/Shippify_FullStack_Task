const express = require("express");


const getControllers = require("../controllers/get-controllers");

const router = express.Router();

//Initial Route - Get all drivers and vehicles
router.get("/", getControllers.getDriversController);






//EXPORT ROUTER
module.exports = router;