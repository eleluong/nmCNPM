const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController');

router.get('/get_all',  productController.getProducts);
router.put('/update_stock', productController.setProductStock);
router.post('/add', productController.addProduct);
router.delete('/delete', productController.deleteProduct);
router.put('/update_type', productController.updateProductType);
router.get('/get_by_name', productController.searchProduct);
router.get('/check_quantity', productController.checkQuantity);

module.exports = router;
