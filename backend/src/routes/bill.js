const express = require('express');
const router = express.Router();
const billController = require('../app/controllers/BillController');

router.get('/check_state',  billController.checkState);
router.post('/add', billController.createBill);
router.delete('/delete', billController.deleteBill);
router.put('/update', billController.updateBill);
router.get('/getInfo', billController.getBillInfo);

module.exports = router;
