import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';


const protect = asyncHandler( async (req, res, next) => {
    let token;
    if(req.headers.authorization && reqq.headers.authorization.startsWith('Bearer')){
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