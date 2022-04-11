const express = require('express');
const { getCars, addCar, getSingleCar } = require('../controllers/carsController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(getCars);
router.route('/').post(protect, addCar);
router.route('/:id').get(getSingleCar);

module.exports = router;