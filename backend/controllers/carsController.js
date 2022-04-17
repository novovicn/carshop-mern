const asyncHandler = require('express-async-handler');
const Car = require('../models/carModel');

const addCar = asyncHandler(async (req, res) => {
  const { brand, model, year, image, mileage, price } = req.body;

  if (!brand || !model || !year || !mileage || !price) {
    res.status(400);
    throw new Error('Please populate all required fields');
  }

  const car = await Car.create({
    owner: req.userId,
    brand,
    model,
    year,
    image,
    mileage,
    price,
  });

  if (car) {
    res.status(201).json(car);
  } else {
    res.status(400);
    throw new Error('Invalid data!');
  }
});

const getCars = asyncHandler(async (req, res) => {
  const pageSize = 6;
  const page = req.query.page || 1;

  const count = await Car.countDocuments({});
  const pages = Math.ceil(count / pageSize);
  const cars = await Car.find()
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.status(200).json({cars, page, pages});
});

const getSingleCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id).populate('owner', 'id name');

  if (car) {
    res.status(200).json(car);
  } else {
    res.status(400);
    throw new Error('Car not found');
  }
});

const deleteCar = asyncHandler(async (req, res) => {
  const removedCar = await Car.deleteOne({ _id: req.params.id });
  if (removedCar.deletedCount > 0) {
    res.status(200).json('Car removed successfully');
  } else {
    res.status(400);
    throw new Error('Car not found');
  }
});

module.exports = {
  addCar,
  getCars,
  getSingleCar,
  deleteCar,
};
