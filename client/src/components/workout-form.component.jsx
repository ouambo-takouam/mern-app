import { useState } from 'react';

const initialInputFields = {
	title: '',
	load: '',
	reps: '',
};

function WorkoutForm() {
	const [inputFields, setInputFields] = useState(initialInputFields);
	const { title, load, reps } = inputFields;

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch('http://localhost:4000/api/workouts', {
			method: 'POST',
			body: JSON.stringify(inputFields),
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response) => response.json())
			.then((workout) => console.log(workout));
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		setInputFields({
			...inputFields,
			[name]: value,
		});
	};

	return (
		<div className="workout-form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					value={title}
					placeholder="Enter title"
					onChange={onChangeHandler}
				/>
				<br />
				<input
					type="text"
					name="load"
					value={load}
					placeholder="Enter load"
					onChange={onChangeHandler}
				/>
				<br />
				<input
					type="text"
					name="reps"
					value={reps}
					placeholder="Enter reps"
					onChange={onChangeHandler}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default WorkoutForm;
