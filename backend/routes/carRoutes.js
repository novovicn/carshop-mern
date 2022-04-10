const express = require('express');
const { getCars, addCar } = require('../controllers/carsController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(getCars);
router.route('/').post(protect, addCar);

module.exports = router;