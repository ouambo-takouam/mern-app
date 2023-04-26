const Workout = require('./workouts.mongo');

async function getAllWorkouts() {
	return await Workout.find({}, '-__v');
}

async function getSingleWorkout(id) {
	return await Workout.findById(id, '-__v');
}

async function addNewWorkout(data) {
	return await Workout.create(data);
}

async function deleteWorkout(id) {
	console.log(`${id} from controller`);

	return await Workout.findByIdAndDelete(id);
}

module.exports = {
	getAllWorkouts,
	getSingleWorkout,
	addNewWorkout,
	deleteWorkout,
};
