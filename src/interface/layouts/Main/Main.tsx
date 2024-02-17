import { Outlet } from 'react-router-dom';
import { Header, ContainerGrid } from '../../components';
import './Main.scss';

export default function MainLayout() {
	return (
		<ContainerGrid tag='section'>
			<Header />
			<ContainerGrid className='main-container-content' tag='section'>
				<ContainerGrid content tag='main'>
					<Outlet />
				</ContainerGrid>
			</ContainerGrid>
		</ContainerGrid>
	);
}

MainLayout.displayName = 'MainLayout';
