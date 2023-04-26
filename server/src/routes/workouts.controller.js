const {
	getAllWorkouts,
	getSingleWorkout,
	addNewWorkout,
	deleteWorkout,
	updateWorkout,
} = require('../models/workouts.model');

async function httpGetAllWorkouts(req, res) {
	try {
		return res.status(200).json(await getAllWorkouts());
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}

async function httpGetSingleWorkout(req, res) {
	const { id } = req.params;

	try {
		return res.status(200).json(await getSingleWorkout(id));
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}

async function httpAddNewWorkout(req, res) {
	try {
		return res.status(201).json(await addNewWorkout(req.body));
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}

async function httpDeleteWorkout(req, res) {
	const { id } = req.params;

	try {
		return res.status(200).json(await deleteWorkout(id));
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}

async function httpUpdateWorkout(req, res) {
	const { id } = req.params;

	try {
		return res.status(200).json(await updateWorkout(id, req.body));
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}

module.exports = {
	httpGetAllWorkouts,
	httpGetSingleWorkout,
	httpAddNewWorkout,
	httpDeleteWorkout,
	httpUpdateWorkout,
};
