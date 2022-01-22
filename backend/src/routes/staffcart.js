const express = require('express');
const router = express.Router();
const staffcartController = require('../app/controllers/StaffCartController');

router.get('/get/:staffId', staffcartController.getCart);
router.put('/deleteFromCart', staffcartController.deleteFromCart);
router.put('/addToCart', staffcartController.checkIfExists, staffcartController.addToCart);
router.post('/add', staffcartController.createBill);
router.get('/get_total/:staffId', staffcartController.getTotal);

module.exports = router;