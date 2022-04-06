const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


const registerUser = asyncHandler( async (req, res) => {

    const { name, email, password } = req.body;
    console.log(name, email, password);
    
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please populate all fields.')
    }
    
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error('Email already in use!');
    }
    const user = await User.create({email, name, password});

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user,name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data');
    }
});

module.exports = {
    registerUser
}