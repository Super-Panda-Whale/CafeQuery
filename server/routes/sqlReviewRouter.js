const express = require('express');
const sqlReviewController = require('../controllers/sqlReviewController');
const router = express.Router();

router.get('/', sqlReviewController.getReviewsForOne, (req, res) => {
  return res.status(200).json(res.locals.review);
});

//create route to handle get requests, use getReviews middleware to get all reviews for a particular id
router.get('/:workspaceid', sqlReviewController.getReviews, (req, res) => {
  return res.status(200).json(res.locals.reviews);
});

//create route to handle get requests, use getReviews middleware to get all reviews for a particular
router.post('/:workspaceid', sqlReviewController.createReview, (req, res) => {
  return res.status(201).json(res.locals.review);
});

// router.delete('/', (req, res) => {
//   console.log('delete this');
//   return res.status(200).json('we did it!');
// });

module.exports = router;
