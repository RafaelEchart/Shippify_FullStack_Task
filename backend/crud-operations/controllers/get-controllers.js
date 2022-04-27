const mysql = require('mysql');

//Database Connection
const conn = mysql.createConnection({
  host: `${process.env.DATABASE_HOST}`,
  user: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_SCHEMA}`
});


const getAllDriversController = async (req, res, next) => {

  let sqlQuery = "SELECT driver.*, concat('[', group_concat(JSON_OBJECT('vehicle_id', vehicle.id, 'plate', vehicle.plate, 'driver_id', vehicle.driver_id) order by vehicle.id separator ','), ']') as vehicles FROM driver JOIN vehicle ON vehicle.driver_id = driver.id GROUP BY driver.id, driver.first_name";

 
  conn.query(sqlQuery, (err, results) => {
    if(err){
      return res.status(404).json({error: err });
    };
    return res.status(200).json({results});
  });

};

const getVehicleByIdController = async (req, res, next) => {

  let sqlQuery = `SELECT * FROM vehicle WHERE id = ${req.params.id}`;

  conn.query(sqlQuery, (err, results) => {
    if(err){
      return res.status(404).json({error: err });
    };
    return res.status(200).json({results});
  });

};


exports.getAllDriversController = getAllDriversController;
exports.getVehicleByIdController = getVehicleByIdController;
