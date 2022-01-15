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
    return res.send({"ID": 20194182});
});

router.get('/login-failure', (req, res, next) => {
    return res.status(400).json({error: "Phone or password is incorrect"});
});

module.exports = router;