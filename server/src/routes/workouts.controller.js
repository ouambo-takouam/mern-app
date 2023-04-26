const {
	getAllWorkouts,
	getSingleWorkout,
	addNewWorkout,
	deleteWorkout,
} = require('../models/workouts.model');

async function httpGetAllWorkouts(req, res) {
	return res.status(200).json(await getAllWorkouts());
}

async function httpGetSingleWorkout(req, res) {
	const { id } = req.params;

	return res.status(200).json(await getSingleWorkout(id));
}

async function httpAddNewWorkout(req, res) {
	return res.status(201).json(await addNewWorkout(req.body));
}

async function httpDeleteWorkout(req, res) {
	const { id } = req.params;

	console.log(`${id} from controller`);

	return res.status(200).json(await deleteWorkout(id));
}

async function httpUpdateWorkout(req, res) {
	// update workout
}

module.exports = {
	httpGetAllWorkouts,
	httpGetSingleWorkout,
	httpAddNewWorkout,
	httpDeleteWorkout,
	httpUpdateWorkout,
};
