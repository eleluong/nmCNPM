const express = require('express');
const router = express.Router();
const staffcartController = require('../app/controllers/StaffCartController');

router.get('/get/:staffId', staffcartController.getCart);
router.put('/deleteFromCart', staffcartController.deleteFromCart);
router.put('/addToCart', staffcartController.addToCart);

module.exports = router;