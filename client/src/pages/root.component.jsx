import Navbar from '../components/navbar.component';
import WorkoutList from '../components/workout-list.component';
import WorkoutForm from '../components/workout-form.component';
import './root.styles.css';

export default function Root() {
	return (
		<div className="main-page">
			<Navbar />
			<div className="content">
				<div className="main-content container">
					<WorkoutList />
					<WorkoutForm />
				</div>
			</div>
		</div>
	);
}
