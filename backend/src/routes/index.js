const cartRouter = require('./cart');
const productRouter = require('./product');
const staffController = require('./staff');
const reportController = require('./report');
const eventController = require('./event');
const billRouter = require('./bill');
const customerRouter = require('./customer');
const userRouter = require('./user');
const shopeventRouter = require('./shopevent');
const staffcartRouter = require('./staffcart');

function route(app) {
    app.use('/cart', cartRouter);
    app.use('/product', productRouter);
    app.use('/staff', staffController);
    app.use('/report', reportController);
    app.use('/event', eventController);
    app.use('/bill', billRouter);
    app.use('/customer', customerRouter);
    app.use('/user', userRouter);
    app.use('/shopevent', shopeventRouter);
    app.use('/staffcart', staffcartRouter);
}

module.exports = route;
