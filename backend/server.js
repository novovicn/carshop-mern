const express = require('express');
const path = require('path');
require('dotenv').config();
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

// Serve frontend

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
}

app.use(errorMiddleware);
const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
