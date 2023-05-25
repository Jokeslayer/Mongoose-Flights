const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /tickets/new (new functionality)
router.get('/flights/:id/tickets/new', ticketCtrl.new);
// POST /tickets (create functionality)
router.post('/flights/:id/tickets', ticketCtrl.create);


module.exports = router;