const db = require('../models/firebaseAdmin');

class ShopEventController {
    // POST
    async createEvent(req, res) {
        try {
            const event = req.body;

            await db.collection('shopevents')
                .add({
                    name: event.name,
                    number: event.number,
                    phone: event.phone,
                    time: event.time,
                });

            return res.status(200).json();
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    // GET
    async showAll(req, res) {
        try {
            const query = db.collection('shopevents');
            const querySnapshot = await query.get();
            const docs = querySnapshot.docs;

            var items = docs.map(function (event) {
                return {
                    id: event.id,
                    name: event.data().name,
                    number: event.data().number,
                    phone: event.data().phone,
                    time: event.data().time,
                }
            });

            console.log(items);
            return res.status(200).send(items);
        } catch (error) {
            console.log('Error!');
            return res.status(500).send(error);
        }
    }

    // DELETE
    async deleteShopEvent(req, res) {
        try {
            const eventId = req.body.id;

            await db.collection('shopevents').doc(eventId).delete({});

            return res.status(200).json();
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    // PUT
    async updateShopEvent(req, res) {
        try {
            const event = req.body;
            await db.collection('shopevents')
                .doc(event.id)
                .update({
                    name: event.name,
                    number: event.number,
                    phone: event.phone,
                    time: event.time,
                });

            return res.status(200).json();
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = new ShopEventController();
