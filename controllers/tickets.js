const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket
};

function newTicket(req, res) {
    res.render('tickets/new', { title: 'Ticket Office', flightId: req.params.id });
}

async function create(req, res) {
    try {

        req.body.flight=req.params.id;
        await Ticket.create(req.body);

        res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.redirect(`/flights/${req.params.id}/tickets/new`);
    }
}