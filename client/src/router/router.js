import { createBrowserRouter } from 'react-router-dom';
import { WorkoutsProvider } from '../context/workouts.context';
import Root from '../pages/root.component';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<WorkoutsProvider>
				<Root />
			</WorkoutsProvider>
		),
	},
]);
