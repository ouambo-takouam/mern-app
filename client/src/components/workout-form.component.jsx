import { useState } from 'react';

const initialFields = {
	title: '',
	load: '',
	reps: '',
};

export default function WorkoutForm() {
	const [fields, setFields] = useState(initialFields);
	const { title, load, reps } = fields;

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch('http://localhost:4000/api/workouts', {
			method: 'POST',
			body: JSON.stringify(fields),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((workout) => console.log(workout));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFields({
			...fields,
			[name]: value,
		});
	};

	return (
		<div className="workout-form">
			<form onSubmit={handleSubmit}>
				<h2>Add a new workout</h2>
				<label>Exercise title</label>
				<input type="text" name="title" value={title} onChange={handleChange} />
				<br />
				<label>Load (in kg)</label>
				<br />
				<input type="text" name="load" value={load} onChange={handleChange} />
				<br />
				<label>Reps</label>
				<br />
				<input type="text" name="reps" value={reps} onChange={handleChange} />
				<br />
				<button type="submit">Add workout</button>
			</form>
		</div>
	);
}
