import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../layouts';
import { ErrorBoundary } from '../components';
import {
	SearchBox,
	SearchResult,
	searchResultLoader,
	ProductDetail,
	productDetailLoader,
} from '../views';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <SearchBox />,
				errorElement: <ErrorBoundary />,
			},
			{
				path: 'items',
				element: <SearchResult />,
				loader: searchResultLoader,
				errorElement: <ErrorBoundary />,
			},
			{
				path: 'items/:id',
				element: <ProductDetail />,
				loader: productDetailLoader,
				errorElement: <ErrorBoundary />,
			},
		],
	},
]);
