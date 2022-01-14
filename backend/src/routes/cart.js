const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');

router.get('/get', cartController.getCart);
router.put('/deleteFromCart', cartController.deleteFromCart);
router.put('/addToCart', cartController.addToCart);

module.exports = router;
