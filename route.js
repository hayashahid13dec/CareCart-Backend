const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/hotels', controller.getHotelData);

module.exports = router;
