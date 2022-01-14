const express = require('express');
const router = express.Router();
const shopeventController = require('../app/controllers/ShopEventController');

router.post('/add', shopeventController.createEvent);
router.get('/get_all', shopeventController.showAll);
router.delete('/delete', shopeventController.deleteShopEvent);
router.put('/update', shopeventController.updateShopEvent);

module.exports = router;