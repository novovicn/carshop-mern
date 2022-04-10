const asyncHandler = require('express-async-handler');
const Car = require('../models/carModel');

const addCar = asyncHandler(async (req, res) => {
  const { brand, model, year, image, mileage, price } = req.body;

  if(!brand || !model ||!year || !mileage || !price){
    res.status(400)
    throw new Error('Please populate all required fields');
  }

  console.log(req.userId);
  const car = await Car.create({
    owner: req.userId,
    brand,
    model,
    year,
    image,
    mileage,
    price,
  });

  if(car){
      res.status(201).json(car)
  }else{
      res.status(400)
      throw new Error('Invalid data!');
  }
});

const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
});

module.exports = {
  addCar,
  getCars,
};