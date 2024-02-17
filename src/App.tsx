import { RouterProvider } from 'react-router-dom';
import { router } from './interface/routes/routes';

export default function App() {
	return <RouterProvider router={router} />;
}

App.displayName = 'App';
