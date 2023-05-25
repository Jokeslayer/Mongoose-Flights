const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({flight: req.params.id});

  res.render('flights/show', { title: 'Flight Records', flight, tickets });
}

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'Departures', flights });
}

function newFlight(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails

  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('flights/new', { title: 'New Flight', departsDate });
}

async function create(req, res) {
  try {
    console.log('testing', req.body);
    await Flight.create(req.body);

    // Always redirect after CUDing data
    // We'll refactor to redirect to the flights index after we implement it
    res.redirect('/flights');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.redirect('/flights/new', { title: 'Add Flight Record', errorMsg: err.message });
  }
  module.exports = router;
}