const cors = require('cors');
const express = require('express');

const app = express();

const workoutsRouter = require('./routes/workouts.router');

app.use(cors());
app.use(express.json());

app.use('/api/workouts', workoutsRouter);

app.get('/', (req, res) => {
	return res.status(200).send('Welcome to server !');
});

module.exports = app;
