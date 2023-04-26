import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home.component';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

export default router;
