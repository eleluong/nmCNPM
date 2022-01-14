const express = require('express')
const router = express.Router()
const passport = require('passport');
const customersController = require('../app/controllers/CustomerController')
require('../app/config/passport')

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/users/login-failure',
    successRedirect: '/users/login-success', 
}))

router.post('/register', customersController.createCustomer)

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/protected-route');
});

router.get('/login-success', (req, res, next) => {
    console.log(req.user);
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
    console.log(req.user);
    res.send('You entered the wrong password.');
});

module.exports = router;