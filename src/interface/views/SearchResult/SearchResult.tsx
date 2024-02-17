import { useLoaderData } from 'react-router-dom';
import { Breadcrumbs, ContainerGrid, ItemsList } from '../../components';
import getSearch from '../../../data/getSearch';
import { getCategoryForBreadcrumbs, getItems } from '../../../common/helpers';
import './SearchResult.scss';

export async function searchResultLoader() {
	const param = new URL(window.location.href).searchParams.get('search');
	const { results, available_filters } = param
		? await getSearch({ param })
		: null;
	const categories = await getCategoryForBreadcrumbs(available_filters);
	const items = getItems(results);
	const searchResult = {
		author: {
			name: 'Ruben',
			lastname: 'Peña',
		},
		categories,
		items,
	};

	return searchResult;
}

export default function SearchResult() {
	const { items, categories } = useLoaderData();
	return (
		<>
			<Breadcrumbs categories={categories} />
			<ContainerGrid className='main-content' content tag='div'>
				<ItemsList items={items} />
			</ContainerGrid>
		</>
	);
}

SearchResult.displayName = 'SearchResult';
