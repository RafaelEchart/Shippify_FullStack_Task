const express = require("express");


const getControllers = require("../controllers/get-controllers");
const deleteControllers = require("../controllers/delete-controllers");

const router = express.Router();

//Initial Route - Get all drivers and vehicles
router.get("/", getControllers.getAllDriversController);
router.delete("/delete_vehicle/:id", deleteControllers.deleteVehicleController);


//EXPORT ROUTER
module.exports = router;