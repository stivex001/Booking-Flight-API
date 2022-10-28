const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
.get('/', controller.getFlights)

.get('/:id', controller.getFlight)

.post('/', controller.createFlight)

.post('/:id', controller.updateFlight)


module.exports = router;

