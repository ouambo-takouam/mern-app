import { useEffect, useContext } from 'react';
import { WorkoutsContext } from '../context/workouts.context';
import WorkoutItem from './workout-item.component';

export default function WorkoutList() {
	const [workouts, dispatch] = useContext(WorkoutsContext);

	useEffect(() => {
		async function fetchWorkouts() {
			const response = await fetch('http://localhost:4000/api/workouts');
			const data = await response.json();

			dispatch({ type: 'collection', payload: data });
		}
		fetchWorkouts();
	}, [dispatch]);

	return (
		<div className="workout-list">
			{workouts &&
				workouts.map((workout) => (
					<WorkoutItem key={workout._id} workout={workout} />
				))}
		</div>
	);
}
