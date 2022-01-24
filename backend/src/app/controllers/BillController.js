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
                if (!doc.exists) {
                    res.send("Error");
                }
                doc.collection('productList').get()
            })
            .then(productList => {
                for (const product of productList) {
                    let check = products.doc(product.documentID()).get();
                    if (!check.data().stock) {
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
        const user = req.params.id;
        const billList = (await bills.where('userId', '==', user).get()).docs;
        let array = [];

        for(const bill of billList) {
            const data = bill.data();
            const productList = (await bill.ref.collection('productList').get()).docs;
            let productArray = productList.map(product => {
                return {
                    productId: product.id,
                    name: product.data().name,
                    number: product.data().number,
                }
            })

            array.push({
                products: productArray,
                billId: bill.id,
                userId: data.userId,
                address: data.shippingAddress,
                phone: data.phone,
                total: data.total,
                state: data.state,
            });
        }
        res.json(array);
    }

    async getBillbyState(req, res) {
        const state = parseInt(req.params.state);
        const billList = (await bills.where('state', '==', state).get()).docs;
        let array = [];
        for(const bill of billList) {
            const data = bill.data();
            const productList = (await bill.ref.collection('productList').get()).docs;
            let productArray = productList.map(product => {
                return {
                    productId: product.id,
                    name: product.data().name,
                    number: product.data().number,
                    price: product.data().price,
                }
            })
            array.push({
                products: productArray,
                billId: bill.id,
                name: data.name,
                userId: data.userId,
                address: data.shippingAddress,
                time: data.time,
                phone: data.phone,
                total: data.total,
                state: data.state,
            });
        }
        res.json(array);
    }

    async createBill(req, res) {
        //console.log('asdfsadfsadf')
        const user = req.body.id;
        //console.log(user);
        const productList = (await carts.doc(user).collection('productList').get()).docs;
        //console.log(productList);
        let total = 0;

        const d = new Date();
        const time = d.getDate().toString() + '/' + (d.getMonth() + 1).toString() + '/' + d.getFullYear().toString();

        await bills.add({
            userId: user,
            name: req.body.name,
            phone: req.body.phone,
            shippingAddress: req.body.address,
            state: 0,
            staffID: "",
            time: time,
        })
            .then(bill => {
                for (const product of productList) {
                    total += product.data().quantity * product.data().price;
                    bill.collection('productList').doc(product.id).set({
                        name: product.data().name,
                        number: product.data().quantity,
                        price: product.data().price,
                    })

                    product.ref.delete();
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
        const productList = (await bills.doc(req.params.id).collection('productList').get()).docs;
        for (const product of productList) {
            product.ref.delete();
        }
        await bills.doc(req.params.id).get()
            .then(bill => {
                if (!bill.exists) {
                    res.send('Bill not found');
                }
                else {
                    bill.ref.delete();
                    res.send('ok');
                }
            })
            .catch(err => {
                console.error('err', err);
                res.status(400).json({ error: err.message });
            })
    }

    async updateBill(req, res) {
        await bills.doc(req.body.billId).get()
            .then(bill => {
                if (!bill.exists) {
                    res.send('Bill not found');
                }
                if (bill.data().state == 0) {
                    bill.ref.update({
                        staffID: req.body.staffID,
                        state: 1,
                    })
                }
                if (bill.data().state == 1) {
                    bill.ref.update({
                        state: 2,
                    })
                }
                res.status(200).send('Bill updated successfully');
            })
            .catch(err => {
                console.error('err', err);
                res.status(400).json({ error: err.message });
            })
    }

    //GET
    async getAll(req, res) {
        try {
            const bills_ = (await bills.get()).docs;

            const statistics = bills_.map(bill => {
                return {
                    time: bill.data().time,
                    total: bill.data().total,
                }
            })

            let arr_total = [];
            let arr_number = [];

            for (let i = 0; i < statistics.length; i++) {
                if (!arr_total[statistics[i].time]) arr_total[statistics[i].time] = 0;
                if (!arr_number[statistics[i].time]) arr_number[statistics[i].time] = 0;

                arr_total[statistics[i].time] += statistics[i].total;
                arr_number[statistics[i].time] ++;
            }

            // console.log(arr_number);
            // console.log(arr_total);
            let arr = [];
            for(let i in arr_number) {
                let tmp = {}
                tmp.time = i;
                tmp.total = arr_total[i];
                tmp.number = arr_number[i];
                arr.push(tmp);
            }

            return res.status(200).send(arr);
        } catch(e) {
            return res.status(500).json(e);
        }
    }
}

module.exports = new BillsController;