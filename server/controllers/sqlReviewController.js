const { query } = require('express');
const sqlDB = require('../models/sqlModels.js');

const sqlReviewController = {};

//create middleware to get all reviews by workspaceid
sqlReviewController.getReviews = async function (req, res, next) {
  const { workspaceid } = req.params;
  const queryString = `SELECT * FROM reviews WHERE workspaceid = ${workspaceid}`;
  try {
    const result = await sqlDB.query(queryString);
    res.locals.reviews = result.rows;
    return next();
  } catch (err) {
    console.log('err in getReviews middleware: ', err);
    return next({
      err,
    });
  }
};

//create middleware to create a review for a certain workspace, given by id
sqlReviewController.createReview = async function (req, res, next) {
  const { workspaceid } = req.params;
  const { username, rating, review } = req.body;
  const queryString = `INSERT INTO reviews (username, rating, review, workspaceid) 
                        VALUES ('${username}', '${rating}', '${review}', '${workspaceid}') RETURNING *`;
  try {
    const result = await sqlDB.query(queryString);
    res.locals.review = result.rows;
    return next();
  } catch (err) {
    console.log('err in getReviews middleware: ', err);
    return next({
      err,
    });
  }
};
// middleware to get
sqlReviewController.getReviewsForOne = async function (req, res, next) {
  const { id } = req.query;
  const queryString = `SELECT * FROM reviews WHERE reviewid = ${id}`;
  try {
    const result = await sqlDB.query(queryString);
    res.locals.review = result.rows;
    return next();
  } catch (err) {
    console.log(err, ' Error in getReviewsForOne middleware');
    return next({ err });
  }
};

module.exports = sqlReviewController;
