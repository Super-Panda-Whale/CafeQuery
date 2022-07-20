const { query } = require('express');
const sqlDB = require('../models/sqlModels.js');

const sqlWorkspaceController = {};

sqlWorkspaceController.getWorkspace = async function (req, res, next) {
  console.log(' in get workspaces midware!!!!');
  const { zipcode } = req.params;
  const queryString = `SELECT * FROM workspaces WHERE zipcode = ${zipcode}`;
  try {
    const workspaces = await sqlDB.query(queryString);
    res.locals.workspaces = workspaces.rows;
    return next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

sqlWorkspaceController.createWorkspace = async function (req, res, next) {
  const {
    workspaceName,
    zipcode,
    address,
    rating,
    wifi,
    type,
    quiet,
    outlets,
    timeLimit,
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
    INSERT INTO workspaces(WorkspaceName, Zipcode, Address, Rating, Wifi, Type, Quiet, Outlets, TimeLimit, LaptopRestrictions, Crowded, OutdoorSeating, PetFriendly, URL, FoodRating, CoffeeRating, Seating, Other)
    VALUES('${workspaceName}', '${zipcode}', '${address}', '${rating}', '${wifi}', '${type}', '${quiet}', '${outlets}', '${timeLimit}', '${laptopRestrictions}', '${crowded}', '${outdoorSeating}', '${petFriendly}', '${url}', '${foodRating}', '${coffeeRating}', '${seating}', '${other}') RETURNING *`;
  try {
    const result = await sqlDB.query(queryString);
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
