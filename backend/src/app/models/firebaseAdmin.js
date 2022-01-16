const admin = require('firebase-admin');
const serviceAccount = require('./lirvecafe-firebase-adminsdk-2.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
