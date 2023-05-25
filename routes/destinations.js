const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create);



module.exports = router;
