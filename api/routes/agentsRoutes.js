const express = require('express');
const router = express.Router();
const agentsCon = require('../controller/agentsController');
router.post('/add', agentsCon.addUser);
module.exports = router;