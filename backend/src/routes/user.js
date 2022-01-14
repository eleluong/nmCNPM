const express = require('express')
const router = express.Router()
const passport = require('passport');
const customersController = require('../app/controllers/CustomerController')
require('../app/config/passport')

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/user/login-failure',
    successRedirect: '/user/login-success', 
}))

router.post('/register', customersController.createCustomer)

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/protected-route');
});

router.get('/login-success', (req, res, next) => {
    console.log('xyz', req.session.user);
    res.send({"ID": 20194182});
});

router.get('/login-failure', (req, res, next) => {
    console.log(req.session.user);
    res.send('You entered the wrong password.');
});

module.exports = router;