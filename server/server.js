const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});