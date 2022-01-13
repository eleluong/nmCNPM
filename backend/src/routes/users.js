const express = require('express')
const router = express.Router()
const passport = require('passport');
const customersController = require('../app/controllers/CustomerController')
require('../app/config/passport')

// const crsfProtections = crsf();
// router.use(crsfProtections);

router.post('/login', passport.authenticate('local', {

    successRedirect: '/users/login-success',
    failureRedirect: '/users/login-failure',
     
}))

router.post('/register', customersController.createCustomer)

// router.get('/:id', usersController.getData);
// router.put('/:id', usersController.putData);
router.get('/login', (req, res, next) => {
   
    const form = '<h1>Login Page</h1><form method="POST" action="/users/login">\
    Enter Phone:<br><input type="tel" name="phone">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br>Login as:\
    <br><input type="radio" name="role" id="1" value="customer">customer\
    <br><input type="radio" name="role" id="2" value="staff">staff\
    <br><input type="radio" name="role" id="3" value="admin">admin\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);
});

router.get('/register', (req, res, next) => {

    const form = '<h1>Register Page</h1><form method="post" action="/users/register">\
                    Enter Phone:<br><input type="tel" name="phone">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br>Enter Name:<br><input type="text" name="name">\
                    <br>Enter Address:<br><input type="text" name="address">\
                    <br>Enter Email:<br><input type="email" name="mail">\
                    <br><br><input type="submit" value="Submit"></form>';

    res.send(form); 

});



router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/protected-route');
});

router.get('/login-success', (req, res, next) => {
    console.log(req.user);
    res.status(200).json(req.session.passport.user);
    // res.send('{"ID": 20194182}');
});

router.get('/login-failure', (req, res, next) => {
    res.status(500).json(req.user)
    // res.send('You entered the wrong password.');
});

module.exports = router;