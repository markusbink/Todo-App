const express = require('express');
const dotenv = require('dotenv');
const connectToDB = require('./config/db');
const todosRouter = require('./routes/todos');

// Get Environment Variables
dotenv.config({path: './config/config.env'});
connectToDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listen to Port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

// Routes
app.use('/api/todos', todosRouter);



