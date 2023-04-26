const { Router } = require('express');

const workoutsRouter = Router();

workoutsRouter.get('/', (req, res) => {
	return res.status(200).json({
		resp: 'GET all workouts',
	});
});

workoutsRouter.get('/:workoutId', (req, res) => {
	return res.status(200).json({
		resp: 'GET single workout',
	});
});

workoutsRouter.post('/', (req, res) => {
	return res.status(201).json({
		resp: 'POST a new workout',
	});
});

workoutsRouter.delete('/', (req, res) => {
	return res.status(200).json({
		resp: 'Workout deleted',
	});
});

workoutsRouter.patch('/', (req, res) => {
	return res.status(200).json({
		resp: 'Workout updated',
	});
});

module.exports = workoutsRouter;
