import { useState, useEffect } from 'react';
import WorkoutItem from './workout-item.component';

export default function WorkoutList() {
	const [workouts, setWorkouts] = useState(null);

	useEffect(() => {
		async function fetchWorkouts() {
			const response = await fetch('http://localhost:4000/api/workouts');
			const workouts = await response.json();
			setWorkouts(workouts);
		}
		fetchWorkouts();
	}, []);

	return (
		<div className="workout-list">
			{workouts &&
				workouts.map((workout) => (
					<WorkoutItem key={workout._id} workout={workout} />
				))}
		</div>
	);
}
