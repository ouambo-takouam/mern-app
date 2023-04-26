function WorkoutItem({ workout }) {
	const { title, reps, load } = workout;

	return (
		<div className="workout-item">
			<h1>{title}</h1>
			<p>
				<span>Load (kg): </span>
				{load}
			</p>
			<p>
				<span>Reps: </span>
				{reps}
			</p>
		</div>
	);
}

export default WorkoutItem;
