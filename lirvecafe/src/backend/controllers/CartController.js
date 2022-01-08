const db = require('../models/firebaseAdmin')

class CartController{
    
    function createCart(cartId) {
        try {
            await db.collection('carts').doc(cartId)
                    .create({
                        cartId: cartId
                    });
        } catch(error) {
            console.log('Error');
        }  
    }

    function getCart(cartId) {
        try {
            const query = db.collection('carts').doc(cartId).collection('productList');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var items = docs.map(function(cart) {
                return {
                    productId: cart.data().productId,
                    state: cart.data().state
                }
            })
            // console.log(items);
            return items;
        } catch(error) {
            console.log('Error');
        }
    }

    function deleteToCart(productId, cartId) {
        try {
            await db.collection('carts').doc(cartId).collection('productList').doc(productId).delete({});
        } catch(error) {
            console.log('Error');
        }
    }

    function updateState(cartId, productId, state) {
        try {
            await db.collection('carts').doc(cartId)
                    .collection('productList').doc(productId)
                    .update({
                        state: state
                    });
        } catch(error) {
            console.log('Error');
        }
    }

    function addToCart(cartId, productId) {
        try {
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
        } catch(error) {
            console.log('Error');
        }
    }
}

module.exports = new CartController();
