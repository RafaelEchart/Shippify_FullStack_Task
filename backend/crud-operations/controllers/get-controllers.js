
const getDriversController = async (req, res, next) => {
  
  res.status(200).json({
    message: "This is working!"
  });
};


exports.getDriversController = getDriversController;
