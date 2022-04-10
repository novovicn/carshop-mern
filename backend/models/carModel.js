const mongoose = require('mongoose');

const carShcema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    VIN: {
        type: String,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    price: {
        type: Number, 
        required: true
    }
})

const Car = mongoose.model('Car', carShcema);

module.exports = Car;