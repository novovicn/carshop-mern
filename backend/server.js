const express = require('express');
const carRoutes = require('./routes/carRoutes')

const app = express();
require('dotenv').config(); 

app.use('/api/cars', carRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
