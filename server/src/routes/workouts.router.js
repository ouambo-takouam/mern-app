const { Router } = require('express');

const {
	httpGetAllWorkouts,
	httpGetSingleWorkout,
	httpAddNewWorkout,
	httpDeleteWorkout,
	httpUpdateWorkout,
} = require('./workouts.controller');

const workoutsRouter = Router();

workoutsRouter.get('/', httpGetAllWorkouts);
workoutsRouter.get('/:id', httpGetSingleWorkout);
workoutsRouter.post('/', httpAddNewWorkout);
workoutsRouter.delete('/:id', httpDeleteWorkout);
workoutsRouter.patch('/:id', httpUpdateWorkout);

module.exports = workoutsRouter;
