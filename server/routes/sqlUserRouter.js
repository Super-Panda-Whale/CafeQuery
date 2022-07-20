const express = require('express');
const sqlUserController = require('../controllers/sqlUserController');
const router = express.Router();

router.post('/signup', sqlUserController.signUp, (req, res) => {
  return res.status(201).json(res.locals.newUser);
});

router.post('/login', sqlUserController.verifyUser, (req, res) => {
  return res.status(200).json('User has signed in!').redirect('/');
});

module.exports = router;
