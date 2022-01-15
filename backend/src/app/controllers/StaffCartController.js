const db = require('../models/firebaseAdmin');
const carts = db.collection('staffcarts');

class StaffCartController {
    // GET
    async getCart(req, res) {
        try {
            const cartId = req.params.staffId;
            
            const products = (await carts.doc(cartId).collection('productList').get()).docs;

            var items = products.map(function(product) {
                return {
                    productId: product.id,
                    quantity: product.data().quantity
                }
            });

            return res.status(200).send(items);
        } catch(error) {
            return res.sendStatus(500);
        }
    }
    //PUT
    async deleteFromCart(req, res) {
        //const id = req.session.passport.user;
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

        return res.status(200);
    }
    //PUT
    async addToCart(req, res) {
        const productId = req.body.productId;
        const cartId = req.body.staffId;
        
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
                     quantity: 1
                 });
        }

        return res.status(200);
        //const id = req.session.passport.user;
        // const id = req.body.customerId;
        // let doc = carts.doc(id).collection('productList').doc(req.body.id);
        // await carts.doc(id).get()
        // .then(cart => {
        //     if(!cart.exists) {
        //         console.log('1')
        //         carts.doc(id).set({
        //             number: 1,
        //         })
        //     }
        //     return doc.get()
        // })
        // .then(product => {
        //     if(!product.exists)
        //         return product.ref.set({
        //             number: 1,
        //         })
        //     else return product.ref.update({
        //         number: product.data().number += 1,
        //     })
        // })    
        // .then(() => {
        //     return doc.get()
        // })
        // .then(doc => {
        //     res.send(doc.data())
        // })
        // .catch(err => {
        //     console.error('err', err);
        //     res.status(400).json({ error: err.message });
        // })
    }
}

module.exports = new StaffCartController;
