const mysql = require('mysql');

//Database Connection
const conn = mysql.createConnection({
  host: `${process.env.DATABASE_HOST}`,
  user: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_SCHEMA}`
});


const getDriversController = async (req, res, next) => {

  let sqlQuery = "SELECT * FROM driver JOIN vehicle ON vehicle.driver_id = driver.id";
  
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.status(200).json({
      results
    });
  });
  
 
};


exports.getDriversController = getDriversController;
