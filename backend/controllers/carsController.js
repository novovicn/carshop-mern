const asyncHandler = require("express-async-handler");



const addCar = asyncHandler( async(req, res) => {
    res.json('car added')
});


const getCars = asyncHandler( async(req, res) => {
    res.json('cars can be found here')
});

module.exports = {
    addCar,
    getCars
}