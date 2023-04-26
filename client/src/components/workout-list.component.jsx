import { useEffect, useState } from 'react';
import WorkoutItem from './workout-item.component';

function WorkoutList() {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		async function getData() {
			const response = await fetch('http://localhost:4000/api/workouts');
			const workouts = await response.json();
			setWorkouts(workouts);
		}
		getData();
	}, []);

	return (
		<div className="workout-list">
			{workouts.map((workout) => (
				<WorkoutItem key={workout._id} workout={workout} />
			))}
		</div>
	);
}

export default WorkoutList;
