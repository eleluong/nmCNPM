const db = require('../models/firebaseAdmin')

class ProductController{
    
    function getProducts(){
        try {
            const query = db.collection('products');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var items = docs.map(function(product) {
                return {
                    productId: product.data().id,
                    name: product.data().name,
                    price: product.data().price,
                    image: product.data().image,
                    description: product.data().description,
                    stock: product.data().stock,
                    state: product.data().state
                }
            })
            console.log(items);
            return items;
        } catch (error) {
            console.log('Error!');
        }
    }

    function setProductStock(stock, productId){
        try {
            await db.collection('products')
                    .doc(productId)
                    .update({
                        stock: stock
                    });
        } catch (error) {
            console.log('Error!');
        }
    }

    function addProduct(product){
        try {
            const query = db.collection('products');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;

            function isExisted(element) {
                return element.data().productId != parseInt(product.productId)
            }
            let exist = docs.every(isExisted);
            // console.log(exist);
            if (exist == true) {
                await db.collection('products')
                    .doc(product.id)
                    .create({
                        productId: product.productId,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        description: product.description,
                        stock: product.stock,
                        state: product.state
                    });
            }
        } catch (error) {
            console.log('Error!');
        }
    }
    
    function deleteProduct(productId){
        try {
            await db.collection('products').doc(productId).delete({});
        } catch(error) {
            console.log('Error!');
        }
    }
    
    function updateProductState(state, productId){
        try {
            await db.collection('products')
                    .doc(productId)
                    .update({
                        state: state
                    });
        } catch (error) {
            console.log('Error!');
        }
    }
    
    function searchProduct(id){
        try {
            const query = db.collection('products');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var product = docs.find(function(doc) {
                return doc.data().productId === id;
            })
            // console.log(product);
            return product.data();
        } catch(error) {
            console.log('Error!');
        }
    }
    
    function checkQuantity(id, stock){
        try {
            const query = db.collection('products');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var product = docs.find(function(doc) {
                return doc.data().productId === id;
            })

            if (stock <= pareseInt(product.data().stock)) {
                return true;
            } else {
                return false;
            }
        } catch(error) {
            console.log('Error!');
        }
    }
    // Phuong thuc nay chua xog tai chua tao ra Cart
    function addToCart(cartId, productId){
        try {
            await db.collection('carts')
                    .doc(cart.id)
                    .collection('productId')
                    .doc(productId)
                    .create({
                        productId: productId,
                        quantity: 1
                    });
        } catch(error) {
            console.log('Error!');
        }
    }
}

module.exports = new ProductController();
