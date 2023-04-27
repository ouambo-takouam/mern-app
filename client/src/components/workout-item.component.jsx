export default function WorkoutItem({ workout }) {
	const { title, load, reps } = workout;

	return (
		<div className="workout-item">
			<h2>{title}</h2>
			<p>
				<span>Load (kg):</span> {load}
			</p>
			<p>
				<span>Reps:</span> {reps}
			</p>
		</div>
	);
}
