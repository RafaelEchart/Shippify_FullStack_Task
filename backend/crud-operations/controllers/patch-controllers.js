const mysql = require("mysql");

//Database Connection
const conn = mysql.createConnection({
  host: `${process.env.DATABASE_HOST}`,
  user: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_SCHEMA}`,
});

const patchVehicleByIdController = async (req, res, next) => {
  const { driverId, plate, model, type, capacity } = req.body.vehicleData;
  const { vehicleId } = req.body.vehicleId;

  console.log(driverId, plate, model, type, capacity, vehicleId);

  let sqlQuery = `UPDATE vehicle SET driver_id = ${driverId}, plate = ${plate}, model = ${model}, type = ${type}, capacity = ${capacity} WHERE id = ${vehicleId}`;

  conn.query(sqlQuery, (err, results) => {
    if (err) {
      return res.status(404).json({ error: err });
    }
    return res.status(200).json({ results: true });
  });
};

exports.patchVehicleByIdController = patchVehicleByIdController;
