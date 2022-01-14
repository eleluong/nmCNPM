const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');

router.post('/add',  customerController.createCustomer);
router.put('/update', customerController.updateCustomer);
router.get('/getInfo/:id', customerController.getUserInfo);

module.exports = router;
