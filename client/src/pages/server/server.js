const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

// Error Handler
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT || 5000, () => console.log('Server running'));
});
