const express = require('express');
require('dotenv').config(); 
const carRoutes = require('./routes/carRoutes')
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
