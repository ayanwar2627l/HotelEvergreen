const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health-check route
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running successfully.' });
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('Successfully connected to MongoDB.'))
        .catch((error) => console.error('MongoDB connection error:', error));
} else {
    console.log('MONGODB_URI not found in .env file. Running without database connection.');
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
