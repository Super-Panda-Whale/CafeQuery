const { query } = require('express');
const sqlDB = require('../models/sqlModels.js');

const sqlWorkspaceController = {};

//middleware to get all workspaces by zipcode
sqlWorkspaceController.getWorkspace = async function (req, res, next) {
  //destructure zipcode from query string
  const { zipcode } = req.query;
  const queryString = `SELECT * FROM workspaces WHERE zipcode = ${zipcode}`;
  try {
    const workspaces = await sqlDB.query(queryString);
    //send through res.locals all relevant workspaces
    res.locals.workspaces = workspaces.rows;
    return next();
  } catch (err) {
    console.log(err);
    next({
      log: err + ' error in the getWorkspace Middleware',
      status: 404,
      message: { err: 'You have a stupid error: ', err },
    });
  }
};

//middleware to create a new workspace
sqlWorkspaceController.createWorkspace = async function (req, res, next) {
  //destructure from request body all relevant information to create a new workspace
  const {
    workspaceName,
    zipcode,
    address,
    rating,
    wifi,
    type,
    quiet,
    outlets,
    laptopRestrictions,
    crowded,
    outdoorSeating,
    petFriendly,
    url,
    foodRating,
    coffeeRating,
    seating,
    other,
  } = req.body;
  const queryString = `
    INSERT INTO workspaces(WorkspaceName, Zipcode, Address, Rating, Wifi, Type, Quiet, Outlets, LaptopRestrictions, Crowded, OutdoorSeating, PetFriendly, URL, FoodRating, CoffeeRating, Seating, Other)
    VALUES('${workspaceName}', '${zipcode}', '${address}', '${rating}', '${wifi}', '${type}', '${quiet}', '${outlets}', '${laptopRestrictions}', '${crowded}', '${outdoorSeating}', '${petFriendly}', '${url}', '${foodRating}', '${coffeeRating}', '${seating}', '${other}') RETURNING *`;
  try {
    const result = await sqlDB.query(queryString);
    //send back the new workspace through res.locals
    res.locals.newWorkspace = result.rows;
    return next();
  } catch (err) {
    console.log(err);
    next({
      log: err + ' error in the createWorkspace Middleware',
      status: 404,
      message: { err: 'You have a stupid error: ', err },
    });
  }
};

module.exports = sqlWorkspaceController;
