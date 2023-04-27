export default function WorkoutForm() {
	return (
		<div className="workout-form">
			<form>
				<h2>Add a new workout</h2>
				<label>Exercise title</label>
				<input type="text" />
				<br />
				<label>Load (in kg)</label>
				<br />
				<input type="text" />
				<br />
				<label>Reps</label>
				<br />
				<input type="text" />
				<br />
				<button>Add workout</button>
			</form>
		</div>
	);
}
