const db = require('../models/firebaseAdmin');
const carts = db.collection('staffcarts');

class StaffCartController {
    // GET
    async getCart(req, res) {
        try {
            const cartId = req.params.staffId;

            const products = (await carts.doc(cartId).collection('productList').get()).docs;

            var items = products.map(function (product) {
                return {
                    productId: product.id,
                    quantity: product.data().quantity
                }
            });

            return res.status(200).send(items);
        } catch (error) {
            return res.status(500).json();
        }
    }

    //PUT
    async deleteFromCart(req, res) {
        //const id = req.session.passport.user;
        try {
            const productId = req.body.productId;
            const cartId = req.body.staffId;

            const products = (await carts.doc(cartId).collection('productList').get()).docs;

            const deletingProduct = products.find(product => {
                return product.id === productId;
            })

            let quantity = deletingProduct.data().quantity;
            if (quantity > 1) {
                carts.doc(cartId)
                    .collection('productList').doc(deletingProduct.id)
                    .set({
                        quantity: quantity - 1
                    });
            } else {
                carts.doc(cartId)
                    .collection('productList').doc(deletingProduct.id)
                    .delete({});
            }

            return res.status(200).json();
        } catch(e) {
            return res.status(500).json(e);
        }
    }

    //PUT
    async addToCart(req, res) {
        try {
            const productId = req.body.productId;
            const cartId = req.body.staffId;
            const price = req.body.price;

            const products = (await carts.doc(cartId).collection('productList').get()).docs;

            const addingProduct = products.find(product => {
                return product.id === productId;
            })

            if (addingProduct) {
                carts.doc(cartId)
                    .collection('productList').doc(productId)
                    .set({
                        quantity: addingProduct.data().quantity + 1
                    });
            } else {
                carts.doc(cartId)
                    .collection('productList').doc(productId)
                    .set({
                        quantity: 1,
                        price: price
                    });
            }

            return res.status(200).json();
        } catch(e) {
            return res.status(500).json();
        }
    }
    //POST
    async createBill(req, res) {
        const productList = carts.doc(req.body.staffId).collection('productList').get();
        let total = 0;
        await db.collection('bills').add({
            phone: req.body.phone,
            shippingAddress: req.body.address,
            state: 0,
            staffID: req.body.staffId,
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
}

module.exports = new StaffCartController;
