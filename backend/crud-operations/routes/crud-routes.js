const express = require("express");


const getControllers = require("../controllers/get-controllers");
const createControllers = require("../controllers/create-controllers");
const deleteControllers = require("../controllers/delete-controllers");
const patchControllers = require("../controllers/patch-controllers");

const router = express.Router();

//Initial Route - Get all drivers and vehicles
router.get("/", getControllers.getAllDriversController);

//Get vehicle by ID
router.get("/get_vehicle/:id", getControllers.getVehicleByIdController);

//Create vehicle for Driver
router.post("/create_vehicle/:driver_id", createControllers.createVehicleController);

//Patch vehicle by ID
router.patch("/update_vehicle/:id", patchControllers.patchVehicleByIdController);

//Delete vehicle by ID
router.delete("/delete_vehicle/:id", deleteControllers.deleteVehicleController);



//EXPORT ROUTER
module.exports = router;