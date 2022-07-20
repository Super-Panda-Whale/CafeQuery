const express = require('express');
const sqlWorkSpaceController = require('../controllers/sqlWorkspaceController');
const router = express.Router();

//get requests are handled by getWorkspace middleware
router.get('/', sqlWorkSpaceController.getWorkspace, (req, res) => {
  //send back a list of all workspaces with the zipcode from the query string
  return res.status(200).json(res.locals.workspaces);
});

//post requests to / route are handled by createWorkspace middleware
router.post('/', sqlWorkSpaceController.createWorkspace, (req, res) => {
  //send back the new workspace
  return res.status(201).json(res.locals.newWorkspace);
});

module.exports = router;
