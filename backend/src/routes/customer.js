const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');

router.post('/add', customerController.createCustomer);
router.post('/update/:id', customerController.updateCustomer);
router.put('/update_password/:id', customerController.updatePassword);
router.get('/getInfo/:id', customerController.getUserInfo);

module.exports = router;
