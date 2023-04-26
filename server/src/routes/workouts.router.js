const { Router } = require('express');

const {
	httpGetAllWorkouts,
	httpGetSingleWorkout,
	httpAddNewWorkout,
	httpDeleteWorkout,
} = require('./workouts.controller');

const workoutsRouter = Router();

workoutsRouter.get('/', httpGetAllWorkouts);
workoutsRouter.get('/:id', httpGetSingleWorkout);
workoutsRouter.post('/', httpAddNewWorkout);
workoutsRouter.delete('/:id', httpDeleteWorkout);

workoutsRouter.patch('/', (req, res) => {
	return res.status(200).json({
		resp: 'Workout updated',
	});
});

module.exports = workoutsRouter;
