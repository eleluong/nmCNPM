const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');

router.get('/get/:cartId', cartController.getCart);
router.put('/deleteFromCart/:cartId/:productId', cartController.deleteFromCart);
router.put('/addToCart/:cartId/:productId', cartController.addToCart);

module.exports = router;
