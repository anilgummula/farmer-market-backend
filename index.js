const express = require('express');
const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRouter');
const FarmerRouter = require('./Routes/farmer'); // Add farmer routes
const RetailerRouter = require('./Routes/retailer'); // Add retailer routes

require('dotenv').config();
require('./models/db.js'); // Initialize database connection

const app = express();
const PORT = process.env.PORT || 5000;

// app.use((err, req, res, next) => {
//     if (err instanceof multer.MulterError) {
//       // Handle multer-specific errors
//       return res.status(400).json({ message: err.message });
//     } else if (err) {
//       // Handle other errors
//       return res.status(400).json({ message: err.message });
//     }
//     next();
//   });
  

// Middleware setup
app.use(express.json())
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: ['Content-Type', 'authorization', 'Authorization'],
    // credentials: true,
}));
// app.use(cors());

// Routes
app.use('/auth', AuthRouter); // Authentication routes
app.use('/farmer', FarmerRouter); // Farmer-specific routes
app.use('/retailer', RetailerRouter); // Retailer-specific routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
