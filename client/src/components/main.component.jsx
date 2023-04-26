import WorkoutList from './workout-list.component';
import WorkoutForm from './workout-form.component';

function Main() {
	return (
		<div className="main-container">
			<div className="main">
				<WorkoutList />
				<WorkoutForm />
			</div>
		</div>
	);
}

export default Main;
