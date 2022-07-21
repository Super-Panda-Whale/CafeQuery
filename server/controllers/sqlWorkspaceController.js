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

//middleware to get a specific workspace by ID
sqlWorkspaceController.getOneWorkspace = async function (req, res, next) {
  const { workspaceid } = req.params;
  const queryString = `SELECT * FROM workspaces WHERE workspaceid = ${workspaceid}`;
  try {
    const workspace = await sqlDB.query(queryString);
    //send through res.locals the retrieved workspace
    res.locals.workspace = workspace.rows;
    return next();
  } catch (err) {
    console.log(err);
    next({
      log: err + ' error in the getOneWorkspace Middleware',
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
    wifi,
    type,
    quiet,
    outlets,
    laptopRestrictions,
    crowded,
    outdoorSeating,
    petFriendly,
    url,
    seating,
    other,
  } = req.body;
  const queryString = `
    INSERT INTO workspaces (WorkspaceName, Zipcode, Address, Wifi, Type, Quiet, Outlets, LaptopRestrictions, Crowded, OutdoorSeating, PetFriendly, URL, Seating, Other)
    VALUES('${workspaceName}', '${zipcode}', '${address}', '${wifi}', '${type}', '${quiet}', '${outlets}', '${laptopRestrictions}', '${crowded}', '${outdoorSeating}', '${petFriendly}', '${url}', '${seating}', '${other}') RETURNING *`;
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
