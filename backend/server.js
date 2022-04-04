const express = require('express');
require('dotenv').config(); 
const carRoutes = require('./routes/carRoutes')
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db');
const {errorMiddleware} = require('./middlewares/errorMiddleware');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

app.use(errorMiddleware);
const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
