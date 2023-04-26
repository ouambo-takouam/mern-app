const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	reps: {
		type: Number,
		required: true,
	},
	load: {
		type: Number,
		required: true,
	},
});

module.exports = new model('Workout', workoutSchema);
