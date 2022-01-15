const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/firebaseAdmin');
const bcrypt = require('bcrypt');

const customFields  = {
    usernameField: 'phone',
    passwordField: 'password',
    passReqToCallback: true,
}

passport.use(new LocalStrategy(customFields, authorize));

async function authorize(req, phone, password, done) {
    console.log('Auth');
    var query
    if (req.body.role == 1) {
        query = db.collection('customers');
    }
    if (req.body.role == 2) {
        query = db.collection('staff');
    }
    if (req.body.role == 3) {
        query = db.collection('admin');
    }

    const docs = (await query.get()).docs;

    const user = docs.find(doc => {
        return doc.data().phone === phone;
    });

    passport.serializeUser((user, done) => done(null, user.id));
    
    passport.deserializeUser((id, done) => {
        const users = db.collection('customers').get().docs;

        const user_ = users.find(doc => {
            return doc.id === id;
        })

        return done(null, user_);
    }); 

    if (!user) {
        return done(null, false, {message: 'No user found'});
    }

    try {
        if (await bcrypt.compare(password, user.data().password)) {
            
            return done(null, user);
        } else {
            return done(null, false, {message: 'Password incorrect'});
        }
    } catch(e) {
        return done(e);
    }

    
}
