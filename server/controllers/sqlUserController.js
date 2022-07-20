const { query } = require('express');
const sqlDB = require('../models/sqlModels.js');
const bcrypt = require('bcryptjs');

const sqlUserController = {};

sqlUserController.signUp = async function (req, res, next) {
  const { username, password } = req.body;
  const hashedPw = await bcrypt.hash(password, 5);
  const queryString = `INSERT INTO users(username, password) VALUES ('${username}', '${hashedPw}') RETURNING *`;
  try {
    const result = await sqlDB.query(queryString);
    res.locals.newUser = result.rows;
    return next();
  } catch (err) {
    console.log('error in signUp: ', err);
    return next({ err });
  }
};

sqlUserController.verifyUser = async function (req, res, next) {
  const { username, password } = req.body;
  const queryString = `SELECT * FROM users WHERE username = '${username}'`;
  try {
    const result = await sqlDB.query(queryString);
    console.log(result);
    if (!result.rows.length) {
      return next({
        log: 'INVALID CREDENTIALS: ' + username,
        status: 401,
        message: { err: 'USER NOT FOUND' },
      });
    }
    const hashedPw = result.rows[0].password;
    const isValidCreds = await bcrypt.compare(password, hashedPw);
    if (!isValidCreds) {
      return next({
        log: 'INVALID CREDENTIALS: ' + username,
        status: 401,
        message: { err: 'Password does not match Username' },
      });
    }
    res.locals.isValid = isValidCreds;
    return next();
  } catch (err) {
    console.log('error in verifyingUser: ', err);
    return next({ err });
  }
};

module.exports = sqlUserController;
