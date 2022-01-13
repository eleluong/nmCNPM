const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/firebaseAdmin');
const bcrypt = require('bcrypt')

const customFields  = {
    usernameField: 'phone',
    passwordField: 'password',
    passReqToCallback: true,
}

passport.use(new LocalStrategy(customFields, authorize))
passport.serializeUser((user, done) => {
    console.log(user.id);
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    db.collection('customers').doc(`${id}`).get()
    .then(user => done(null, user.data()))
}); 


async function authorize(req, username, password, done) {
    var query
    if (req.body.role == 1) {
        query = db.collection('customers')
    }
    if (req.body.role == 2) {
        query = db.collection('staff')
    }
    if (req.body.role == 3) {
        query = db.collection('admin')
    }
    query.where('phone', '==', `${username}`).get()
    .then(user => {
        if(user.empty) {
            console.log('Không có tk');
            return done(null, false, {message: 'Không tồn tại số điện thoại đăng nhập'});
        }
        const hashedPassword = user.docs[0].data().password;
        if(!bcrypt.compareSync(password, hashedPassword) && !(password===hashedPassword)) {
            return done(null, false, {message: 'Sai mật khẩu'});
        }
        return done(null, user.docs[0]);
    })
    .catch(err => {
        return done(err);
    })
}
