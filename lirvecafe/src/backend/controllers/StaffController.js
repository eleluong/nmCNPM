const db = require('../models/firebaseAdmin');

class StaffController {
   
    function createStaff(staff) {
        try {
            // console.log(staff);
            const query = db.collection('staff');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;

            function isExisted(element) {
                return element.data().productId == parseInt(product.productId)
            }
            let exist = docs.every(isExisted);

            if (exist == true) {
                await db.collection('staff')
                    .doc(staff.id)
                    .create({
                        staffId: staff.id,
                        name: staff.name,
                        address: staff.address,
                        phone: staff.phone,
                        TimeStart: staff.TimeStart,
                        TimeEnd: staff.TimeEnd
                    });
            }               
        } catch (error) {
            console.log('Error!');
        }
    }
    
    function showAll() {
        try {
            const query = db.collection('staff');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var items = docs.map(function(staff) {
                return {
                    staffId: staff.data().id,
                    name: staff.data().name,
                    address: staff.data().address,
                    phone: staff.data().phone,
                    TimeStart: staff.data().TimeStart,
                    TimeEnd: staff.data().TimeEnd
                }
            })
            console.log(items);
            return items;
        } catch (error) {
            console.log('Error!');
        }
    }
    
    function showDetail(staffId) {
        try {
            // console.log(staffId);
            const query = db.collection('staff');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;
            var staff = docs.find(function(doc) {
                return doc.data().id === staffId;
            })
            console.log(staff);
            return staff.data();
        } catch (error) {
            console.log('This id does not exist in database.');
        }
    }
    
    function deleteStaff(staffId) {
        try {
            await db.collection('staff').doc(staffId).delete({});
        } catch (error) {
            console.log('Error!');
        }
    }
    
    function updateStaff(staff) {
        try {
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
        } catch (error) {
            console.log('Error!');
        }
    }
}

module.exports = new StaffController();
