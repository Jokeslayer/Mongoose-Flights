const Flight = require('../models/flight');

module.exports = {
    create
};

async function create(req, res) {
    try {
        let flight = await Flight.findById(req.params.id);

        flight.destination.push(req.body);
        await flight.save();
        res.redirect(`/flights/${flight._id}`);
    } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.redirect('/flights');
    }
}