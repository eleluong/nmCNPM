const db = require('../models/firebaseAdmin');
const carts = db.collection('carts');

class CartController {
    // GET
    async getCart(req, res) {
        try {
            const cartId = req.params.cartId;

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
            const cartId = req.body.cartId;

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
            const cartId = req.body.cartId;
            const price = req.body.price;

            const products = (await carts.doc(cartId).collection('productList').get()).docs;

            const addingProduct = products.find(product => {
                return product.id === productId;
            })

            if (addingProduct) {
                carts.doc(cartId)
                    .collection('productList').doc(productId)
                    .update({
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
            return res.status(500).json(e);
        }
    }

    //GET
    async getTotal(req, res) {
        try {
            const cartId = req.params.cartId;

            const products = (await carts.doc(cartId).collection('productList').get()).docs;

            const sum = products.reduce((total, product) => {
                return total + product.data().quantity*product.data().price;
            }, 0); 
            console.log(sum);
            return res.status(200).json(sum);
        } catch(error) {
            return res.status(500).json();
        }
    }
}

module.exports = new CartController;
