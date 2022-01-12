const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');

router.get('/get/:id', cartController.getCart);
router.delete('/deleteFromCart', cartController.deleteFromCart);
router.post('/addToCart', cartController.addToCart);
router.put('/descrease', cartController.descreaseFromCart);

module.exports = router;
