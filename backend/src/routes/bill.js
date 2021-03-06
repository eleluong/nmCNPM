const express = require('express');
const router = express.Router();
const billController = require('../app/controllers/BillController');

router.get('/check_state/:id', billController.checkState);
router.get('/get_by_customerId/:id', billController.getBillByCustomerID);
router.get('/get_all', billController.getAll);
router.get('/get_by_state/:state', billController.getBillbyState);
router.post('/add', billController.createBill);
router.delete('/delete/:id', billController.deleteBill);
router.put('/update', billController.updateBill);
router.get('/:id', billController.getBillByCustomerID);

module.exports = router;
