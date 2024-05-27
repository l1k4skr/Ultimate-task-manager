const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));