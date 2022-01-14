const express = require('express');
const router = express.Router();
const reportController = require('../app/controllers/ReportController');

router.get('/get', reportController.getReport);
router.put('/update', reportController.updateCost);

module.exports = router;
