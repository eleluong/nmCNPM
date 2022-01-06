const db = require('../models/firebaseAdmin')

class CartController{
    //GET
    async createCart(req, res) {
        try {
            const cartId = req.body.cartId;
            await db.collection('carts').doc(cartId)
                    .create({
                        cartId: cartId
                    });
            return res.status(204).json();
        } catch(error) {
            return res.status(500).json();
        }  
    }

    async getCart(req, res) {
        try {
            const cartId = req.params.id;
            const query = db.collection('carts').doc(cartId).collection('productList');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var items = docs.map(function(cart) {
                return {
                    productId: cart.data().productId,
                    state: cart.data().state
                }
            })
            console.log(items);
            res.status(204).json();
            return items;
        } catch(error) {
            res.status(500).json();
        }
    }

    async deleteToCart(req, res) {
        try {
            const productId = req.body.productId;
            const cartId = req.body.cartId;
            await db.collection('carts').doc(cartId).collection('productList').doc(productId).delete({});
            return res.status(204).json();
        } catch(error) {
            return res.status(500).json();
        }
    }

    async updateState(req, res) {
        try {
            const state = req.body.state;
            const productId = req.body.productId;
            const cartId = req.body.cartId;
            await db.collection('carts').doc(cartId)
                    .collection('productList').doc(productId)
                    .update({
                        state: state
                    });
            return res.status(204).json();
        } catch(error) {
            return res.status(500).json();
        }
    }

    async addToCart(req, res) {
        try {
            const productId = req.body.productId;
            const cartId = req.body.cartId;

            const query = db.collection('carts').doc(cartId).collection('productList');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;

            function isExisted(element) {
                return element.data().productId != productId
            }
            let exist = docs.every(isExisted);

            if (exist == true) {
                await db.collection('carts').doc(cartId)
                        .collection('productList').doc(productId)
                        .create({
                            productId: productId,
                            state: 1
                        });
            }
            return res.status(204).json();
        } catch(error) {
            return res.status(500).json();
        }
    }
}

module.exports = new CartController();
