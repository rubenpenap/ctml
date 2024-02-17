import { useLoaderData } from 'react-router-dom';
import { Breadcrumbs, ContainerGrid, ItemDetail } from '../../components';
import getItem from '../../../data/getItem';
import { getProductFormatted } from '../../../common/helpers';
import getCategory from '../../../data/getCategory';

export async function productDetailLoader({ params }) {
	const product = await getItem(params.id);
	const { path_from_root } = await getCategory({
		param: product[0].body.category_id,
	});
	const categories = path_from_root.map((category) => category.name);
	const {
		item,
		picture,
		condition,
		free_shipping,
		sold_quantity,
		description,
	} = await getProductFormatted(product[0].body);

	const productDetails = {
		author: {
			name: 'Ruben',
			lastname: 'Peña',
		},
		item,
		picture,
		condition,
		free_shipping,
		sold_quantity,
		description,
	};
	return { productDetails, categories };
}

export default function ProductDetail() {
	const { productDetails, categories } = useLoaderData();
	return (
		<>
			<Breadcrumbs categories={categories} />
			<ContainerGrid className='main-content' content tag='section'>
				<ItemDetail product={productDetails} />
			</ContainerGrid>
		</>
	);
}

ProductDetail.displayName = 'ProductDetail';
