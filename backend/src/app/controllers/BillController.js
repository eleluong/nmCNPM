const db = require('../models/firebaseAdmin');
const bills = db.collection('bills');
const carts = db.collection('carts');
const products = db.collection('products');
const hash = require('../config/hash');
const { FieldValue } = require('firebase-admin/firestore');


class BillsController {

    async checkState(req, res, next) {
        const user = req.body.id;
        await carts.doc(user).get()
        .then(doc => {
            if(!doc.exists) {
                res.send("Error");
            }
            doc.collection('productList').get()
        })
        .then(productList => {
            for(const product of productList) {
                let check = products.doc(product.documentID()).get();
                if(!check.data().stock) {
                    product.delete();
                }
            }
            next();
        })
        .catch(err => {
            console.error('err', err);
            res.status(400).json({ error: err.message });
        })
    }

    async getBillByCustomerID(req, res) {
        const user = req.body.id;
        await bills.where('userID', '==', user).get().
        then(billList => {
            let array = [];
            billList.forEach(bill => {
                data = bill.data();
                array.push({
                    billId: data.id,
                    customerId: data.customerId,
                    address: data.address,
                    phone: data.phone,
                    total: data.total,
                })
            })
            res.json(array);
        })
    }

    async getBillbyState(req, res) {
        const state = parseInt(req.params.state);
        await bills.where('state', '==', state).get()
        .then(billList => {
            let array = [];
            billList.forEach(bill => {
                data = bill.data();
                array.push({
                    billId: data.id,
                    customerId: data.customerId,
                    address: data.address,
                    phone: data.phone,
                    total: data.total,
                })
            })
            res.json(array);
        })
    }

    async createBill(req, res) {
        const user = req.body;
        console.log(user);
        const productList = carts.doc(user.id).collection('productList').get();
        let total = 0;
        await bills.add({
            phone: user.phone,
            shippingAddress: user.address,
            state: 0,
            staffID: "",
            time: FieldValue.serverTimestamp(),
        })
        .then(bill => {
            for(const product of productList) {
                total += product.number * product.price;
                bill.collection(productList).doc(product.id).set({
                    number: product.number,
                })
            }
            bill.update({
                total: total,
            })
        })
        .catch(err => {
            console.error('err', err);
            res.status(400).json({ error: err.message });
        })
    }

    async deleteBill(req, res) {
        await bills.doc(req.body.id).get()
        .then(bill => {
            if(!bill.exists) {
                res.send('Bill not found');
            }
            bill.delete();
        })
        .catch(err => {
            console.error('err', err);
            res.status(400).json({ error: err.message });
        })
    }

    async updateBill(req, res) {
        await bills.doc(req.body.billID).get()
        .then(bill => {
            if(!bill.exists) {
                res.send('Bill not found');
            }
            if(bill.data().state == 0) {
                bill.update({
                    staffID: req.body.staffID,
                    state: 1,
                })
            }
            if(bill.data().state == 1) {
                bill.update({
                    state: 2,
                })
            }
        })
        .catch(err => {
            console.error('err', err);
            res.status(400).json({ error: err.message });
        })
    }
}

module.exports = new BillsController;