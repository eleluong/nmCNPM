const db = require('../models/firebaseAdmin');
const hash = require('../config/hash');

class StaffController {
    // POST
    async createStaff(req, res) {
        try {
            const staff = req.body;
            // console.log(staff);
            const query = (await db.collection('staff').get()).docs;

            const staff_ = docs.find(doc => {
                return doc.data().phone === staff.phone;
            })

            if (!staff) {
                db.collection('staff')
                    .add({
                        name: staff.name,
                        address: staff.address,
                        phone: staff.phone,
                        TimeStart: staff.TimeStart,
                        TimeEnd: staff.TimeEnd,
                        password: hash.hash(staff.password)
                    });
                return res.status(200).json('success');
            } else {
                return res.status(200).json('existed phone'); 
            }               
        } catch (error) {
            return res.status(500).send(error);
        }
    }
    // GET
    async showAll(req, res) {
        try {
            const query = db.collection('staff');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;

            var items = docs.map(function(staff) {
                return {
                    staffId: staff.id,
                    name: staff.data().name,
                    address: staff.data().address,
                    phone: staff.data().phone,
                    TimeStart: staff.data().TimeStart,
                    TimeEnd: staff.data().TimeEnd
                }
            });

            console.log(items);
            return res.status(200).send(items);
        } catch (error) {
            console.log('Error!');
            return res.status(500).send(error);
        }
    }
    // GET
    async showDetail(req, res) {
        try {
            const staffId = req.body.id;

            const query = db.collection('staff');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;

            var staff = docs.find(function(doc) {
                return doc.id === staffId;
            })
            staff.data().staffId = staff.id;
            delete staff.data().password;

            return res.status(200).send(staff.data());
        } catch (error) {
            return res.status(500).send(error);
        }
    }
    // DELETE
    async deleteStaff(req, res) {
        try {
            const staffId = req.body.id;

            await db.collection('staff').doc(staffId).delete({});

            return res.status(200).json();
        } catch (error) {
            return res.status(500).send(error);
        }
    }
    // PUT
    async updateStaff(req, res) {
        try {
            const staff = req.body;
            //console.log(staff);

            await db.collection('staff')
                    .doc(staff.id)
                    .update({
                        phone: staff.phone,
                        name: staff.name,
                        address: staff.address,
                        TimeStart: staff.TimeStart,
                        TimeEnd: staff.TimeEnd,
                        password: hash.hash(staff.password)
                    });

            return res.status(200).json();
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = new StaffController();
