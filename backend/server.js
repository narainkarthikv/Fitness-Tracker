const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('https://fitness-vq64.onrender.com/exercises', exercisesRouter);
app.use('https://fitness-vq64.onrender.com/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
