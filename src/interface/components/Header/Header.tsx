import { useEffect, useRef } from 'react';
import {
	NavLink,
	useNavigate,
	useFetcher,
	useSearchParams,
} from 'react-router-dom';
import { ContainerGrid } from '../../components';
import { getSearchParamType } from '../../../common/helpers';
import logoMl from '../../assets/Logo_ML@2x.png';
import searchIcon from '../../assets/ic_Search@2x.png';
import './Header.scss';

export default function Header() {
	const [searchParams, setSearchParams] = useSearchParams('');
	const fetcher = useFetcher();
	const navigate = useNavigate();
	const isSubmitting = fetcher.state === 'submitting';
	const formRef = useRef<HTMLFormElement | null>(null);
	const focusRef = useRef<HTMLInputElement | null>(null);

	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (formRef.current) {
			formRef.current.reset();
		}
		if (searchParams.get('search')) {
			navigate(`/items?search=${searchParams.get('search')}`);
		}
		if (searchParams.get('ids')) {
			navigate(`/items/${searchParams.get('ids')}`);
		}
	}

	useEffect(() => {
		if (focusRef.current) {
			focusRef.current.focus();
		}
	}, []);

	return (
		<ContainerGrid className='header-container' tag='div'>
			<ContainerGrid className='header' content tag='header'>
				<nav>
					<NavLink to='/' aria-label='Ir al inicio'>
						<img src={logoMl} alt='Logo MercadoLibre' width={53} height={36} />
					</NavLink>
				</nav>
				<search className='search'>
					<fetcher.Form method='post' onSubmit={onSubmit} ref={formRef}>
						<label htmlFor='searchInput' hidden>
							Campo de búsqueda
						</label>
						<input
							type='text'
							name='searchInput'
							placeholder='Nunca dejes de buscar'
							onChange={(event) =>
								setSearchParams(getSearchParamType(event.target.value))
							}
							ref={focusRef}
						/>
						<button type='submit' disabled={isSubmitting}>
							<img src={searchIcon} alt='Buscar' width={18} height={18} />
						</button>
					</fetcher.Form>
				</search>
			</ContainerGrid>
		</ContainerGrid>
	);
}

Header.displayName = 'Header';
