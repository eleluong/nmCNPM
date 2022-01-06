const db = require('../models/firebaseAdmin')

class ProductController{
    //GET
    async getProducts(req, res){
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
            res.status(204).json();
            return items;
        } catch (error) {
            console.log('Error!');
            return res.status(500).json(error);
        }
    }
    // PUT
    async setProductStock(req, res){
        try {
            const stock = req.body.stock;
            const productId = req.body.id;
            await db.collection('products')
                    .doc(productId)
                    .update({
                        stock: stock
                    });
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    // POST
    async addProduct(req, res){
        try {
            const product = req.body;
            const query = db.collection('products');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;

            function isExisted(element) {
                return element.data().productId == parseInt(product.productId)
            }
            let exist = docs.every(isExisted);
            // console.log(exist);
            if (exist == true) {
                await db.collection('products')
                    .doc(product.id)
                    .create({
                        productId: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        description: product.description,
                        stock: product.stock,
                        state: product.state
                    });
            }
            return res.status(204).json();
        } catch (error) {
            console.log('Error!');
            return res.status(500).json(error);
        }
    }
    // DELETE
    async deleteProduct(req, res){
        try {
            const productId = req.params.id;
            await db.collection('products').doc(productId).delete({});
            return res.status(204).json();
        } catch(error) {
            return res.status(500).json(error);
        }
    }
    // PUT
    async updateProductState(req, res){
        try {
            const state = req.body.state;
            const productId = req.body.id;
            await db.collection('products')
                    .doc(productId)
                    .update({
                        state: state
                    });
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    // GET
    async searchProduct(req, res){
        try {
            const id = req.params.id;
            const query = db.collection('products');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var product = docs.find(function(doc) {
                return doc.data().productId === id;
            })
            // console.log(product);
            res.status(204).json();
            return product.data();
        } catch(error) {
            return res.status(500).json(error);
        }
    }
    // GET
    async checkQuantity(req, res){
        try {
            const id = req.params.id;
            const stock = req.params.stock;
            const query = db.collection('products');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var product = docs.find(function(doc) {
                return doc.data().productId === id;
            })

            res.status(204).json();
            if (stock <= pareseInt(product.data().stock)) {
                return true;
            } else {
                return false;
            }
        } catch(error) {
            return res.status(500).json(error);
        }
    }
    // PUT
    async addToCart(req, res){
        try {
            const cartId = req.body.cartId;
            const productId = req.body.productId;
            await db.collection('carts')
                    .doc(cart.id)
                    .collection('productId')
                    .doc(productId)
                    .create({
                        productId: productId,
                        quantity: 1
                    });
            return res.status(204).json();
        } catch(error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new ProductController();
