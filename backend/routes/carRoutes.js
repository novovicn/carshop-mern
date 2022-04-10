const express = require('express');
const { getCars, addCar } = require('../controllers/carsController');

const router = express.Router();

router.route('/').get(getCars);
router.route('/').post(addCar);

module.exports = router;