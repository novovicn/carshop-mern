const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const protect = asyncHandler ( async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            console.log('token', token);
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            console.log('decoded', decoded);
            req.userId = decoded.id;   
            next();
        } catch (error) {
            res.status(401)
            throw new Error('Invalid token');
        }
    }else{
        res.status(401)
        throw new Error('No token found')
    }
});

module.exports = protect;