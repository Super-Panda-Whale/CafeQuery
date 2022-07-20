const express = require('express');
const sqlWorkSpaceController = require('../controllers/sqlWorkspaceController');
const router = express.Router();

router.get('/', (req, res) => {
<<<<<<< HEAD
  return res.json('hello joey');
=======
  return res.status(200).json('hello world')
>>>>>>> development
});

router.post('/', sqlWorkSpaceController.createWorkspace, (req, res) => {
  return res.json(res.locals.newWorkspace);
});

module.exports = router;
