import { getAmountFormatted } from '../../../common/helpers';
import './ItemDetail.scss';

interface ItemDetailProps {
	product: {
		item: {
			id: string;
			title: string;
			price: { currency: string; amount: number; decimals: number };
		};
		picture: string;
		condition: string;
		free_shipping: boolean;
		sold_quantity: number;
		description: string;
	};
}

export default function ItemDetail({ product }: ItemDetailProps) {
	const {
		item: {
			title,
			price: { amount, currency },
		},
		picture,
		condition,
		sold_quantity,
		description,
	} = product;
	return (
		<section className='item-details-container'>
			<div className='item-details-info-container'>
				<img className='item-details-image' src={picture} alt={title} />
				<div className='item-details-info'>
					<p className='item-condition'>
						{`${
							condition === 'new' ? 'Nuevo' : 'Usado'
						} - ${sold_quantity} vendidos`}
					</p>
					<h2 className='item-title'>{title}</h2>
					<p className='item-price'>{getAmountFormatted(amount, currency)}</p>
					<button>Comprar</button>
				</div>
			</div>
			<div className='item-description-container'>
				<h3 className='item-description-title'>Descripción del producto</h3>
				<p className='item-description'>{description}</p>
			</div>
		</section>
	);
}
