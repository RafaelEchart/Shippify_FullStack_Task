const mysql = require('mysql');

//Database Connection
const conn = mysql.createConnection({
  host: `${process.env.DATABASE_HOST}`,
  user: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_SCHEMA}`
});


const deleteVehicleController = async (req, res, next) => {

  let sqlQuery = `DELETE FROM vehicle WHERE id = ${req.params.id}`;

 
  conn.query(sqlQuery, (err, results) => {
    if(err){
      return res.status(404).json({error: err });
    };
    return res.status(200).json({results: true});
  });

};


exports.deleteVehicleController = deleteVehicleController;
