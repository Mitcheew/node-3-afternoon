const swag = require('../models/swag')

module.exports = {
    add: (req, res, next) => {
        let { session } = req;
        const { id } = req.query;
        const idCheck = session.user.cart.indexOf(cart => cart.id == id)
            const item = swag.find(swag => swag.id == id)
        if(idCheck >= 0) {
            res.status(200).send(session.user)
        } else {
            const item = swag.find(swag => swag.id == id)
            session.user.cart.push(item)
            session.user.total += item.price;
            res.status(200).send(session.user)
        }
    },
    delete: (req, res, next) => {
        let { session } = req;
        const { id } = req.query;
        const index = session.user.cart.indexOf(cart => cart.id == id)
        
        session.user.cart.splice(index, 1);
        const item = swag.find(swag => swag.id == id)
        session.user.total -= item.price;

        res.status(200).send(session.user)

    },
    checkout: (req, res, next) => {
        let { session } = req;
        session.user.cart = [];
        session.user.total = 0;
        res.status(200).send(session.user)

    }
}