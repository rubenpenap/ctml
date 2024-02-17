import './Breadcrumbs.scss';

export default function Breadcrumbs({ categories }: { categories: string[] }) {
	return categories ? (
		<section className='breadcrumbs'>
			{categories.map((category, index) => {
				if (index === categories.length - 1) {
					return <span key={category}>{category}</span>;
				}
				return <span key={category}>{`${category} > `}</span>;
			})}
		</section>
	) : null;
}

Breadcrumbs.displayName = 'Breadcrumbs';
