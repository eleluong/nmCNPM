const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');

router.get('/get/:cartId', cartController.getCart);
router.put('/deleteFromCart', cartController.deleteFromCart);
router.put('/addToCart', cartController.addToCart);
router.get('/get_total/:cartId', cartController.getTotal);

module.exports = router;
