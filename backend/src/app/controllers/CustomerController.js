const db = require('../models/firebaseAdmin');
const customers = db.collection('customers');
const hash = require('../config/hash');


class CustomersController {

    async createCustomer(req, res) {
        // let phone = req.body.phone;
        // await customers.where('phone', '==', ${phone}).get()
        // .then(user => {
        //     if(user.empty) {
        //         const password = hash.hash(req.body.password);
        //         customers.add({
        //             phone: phone,
        //             password: password,
        //             name: req.body.name,
        //             email: req.body.email,
        //             address: req.body.address,

        //         })
        //         // res.redirect('/users/login')
        //         console.log('backend');
        //         res.send('Thành công')

        //     }
        //     else res.send('user already exists');
        // })
        // .catch(err => {
        //     console.error(err);
        // })

        //new function
        let phone = req.body.phone;
        let password = hash.hash(req.body.password);
        const docs = (await customers.get()).docs;
        const cust = docs.find(doc => {
            return doc.data().phone === phone;
        })
        if (!cust) {
            customers.add({
                phone: phone,
                password: password,
                name: req.body.name,
                email: req.body.email,
                address: req.body.address
            });
            console.log('\n Thành công \n');
            res.status(200).send('Đăng ký thành công');
        } else res.status(409).send('Số điện thoại đăng ký đã tồn tại');
    }

    async updateCustomer(req, res) {
        if (req.body.password != "") {
            const password = hash.hash(req.body.password);
        }
        await customers.doc(req.user.id).get()
            .then(doc => {
                if (!doc.exists) {
                    res.send('damn door');
                } else {
                    doc.update({
                        name: req.body.name || this.name,
                        phone: req.body.phone || this.phone,
                        address: req.body.address || this.address,
                        password: password || this.password,
                    })
                    res.redirect('users/info')
                }
            })
            .catch(err => {
                console.error('err', err);
                res.status(400).json({error: err.message});
            })
    }

    async getUserInfo(req, res, next) {
        await customers.doc(req.params.id).get()
            .then(doc => {
                if (!doc.exists) {
                    res.send('not exist this user id');
                }
                res.send(doc.data());
            })
            .catch(err => {
                console.error('err', err);
                res.status(400).json({error: err.message});
            })
    }

}

module.exports = new CustomersController;