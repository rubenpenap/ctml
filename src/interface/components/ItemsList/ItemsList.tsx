import { Link } from 'react-router-dom';
import shippingIcon from '../../../interface/assets/ic_shipping@2x.png';
import { getAmountFormatted } from '../../../common/helpers';
import './ItemsList.scss';

interface ItemsListProps {
	items: {
		id: string;
		title: string;
		price: { currency: string; amount: number };
		picture: string;
		condition: string;
		free_shipping: boolean;
	}[];
}

export default function ItemsList({ items }: ItemsListProps) {
	return (
		<section className=''>
			{items.length ? (
				items.map((item) => (
					<Link
						key={item.id}
						to={`/items/${item.id}`}
						className='item-list-container'
					>
						<img
							className='item-img'
							src={item.picture}
							alt={item.title}
							width={180}
							height={180}
						/>
						<div className='item-info-container'>
							<div className='item-price-container'>
								<span className='item-price'>
									{getAmountFormatted(item.price.amount, item.price.currency)}
								</span>
								{item.free_shipping ? (
									<span>
										<img
											src={shippingIcon}
											alt='Envío gratis'
											width={18}
											height={18}
										/>
									</span>
								) : null}
							</div>
							<h3>{item.title}</h3>
						</div>
					</Link>
				))
			) : (
				<h2>No se encontraron resultados</h2>
			)}
		</section>
	);
}

ItemsList.displayName = 'ItemsList';
