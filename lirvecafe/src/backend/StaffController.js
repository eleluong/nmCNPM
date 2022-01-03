const admin = require('firebase-admin');
const serviceAccount = require('../../../cnpm-firebase-adminsdk.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

class StaffController {
    async createStaff(req, res, next) {
        try {
            const staff = req.body;
            // console.log(staff);
            await db.collection('staff')
                    .doc('/' + staff.id + '/')
                    .create({
                        staffId: staff.id,
                        name: staff.name,
                        address: staff.address,
                        phone: staff.phone,
                        TimeStart: staff.TimeStart,
                        TimeEnd: staff.TimeEnd
                    });
            return res.status(204).json();
        } catch (error) {
            console.log('Error!');
            return res.status(500).json(error);
        }
    }

    async showAll(req, res, next) {
        try {
            const query = db.collection('staff');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var items = docs.map(function(staff) {
                return {
                    staffId: staff.id,
                    name: staff.name,
                    address: staff.address,
                    phone: staff.phone,
                    TimeStart: staff.TimeStart,
                    TimeEnd: staff.TimeEnd
                }
            })
            console.log(items);
            return res.status(204).json();
        } catch (error) {
            console.log('Error!');
            return res.status(500).json(error);
        }
    }

    async showDetail(req, res, next) {
        try {
            const staffId = req.params.id;
            console.log(staffId);
            const query = db.collection('staff');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var staff = docs.find(function(doc) {
                return doc.data().id === staffId;
            })
            console.log(staff);
            return res.status(204).json();
        } catch (error) {
            console.log('This id does not exist in database.');
            return res.status(500).json(error);
        }
    }

    async deleteStaff(req, res, next) {
        try {
            const staffId = req.params.id;
            await db.collection('staff').doc(staffId).delete({});
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async updateStaff(req, res, next) {
        try {
            const staff = req.body;
            console.log(staff);
            await db.collection('staff')
                    .doc(staff.id)
                    .update({
                        staffId: staff.id,
                        name: staff.name,
                        address: staff.address,
                        phone: staff.phone,
                        TimeStart: staff.TimeStart,
                        TimeEnd: staff.TimeEnd
                    });
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new StaffController();
