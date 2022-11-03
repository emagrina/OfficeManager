import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
// @ts-ignore
import Imagen from '../../assets/img/RandomPerson.jpg';
import Header from '../../components/Header/Header';

const Name = 'Lluís';
const LastName = 'Isern';

function Profile({ name, lastName }: any) {

	const location = useLocation().pathname;

	return (
	
		<div className='profileBody'>
			<Header name={Name} lastName={LastName} />
			<section className='profileHeader'>
				<img src={Imagen} className='profileImage' /> <span className='profileName'> Lluís Isern </span>
			</section>
			<section className='profileLinks'>
				<NavLink 
					to={'./data'}
					className={({ isActive }) =>
						isActive || location == '/profile' ? 'activeStyle' : 'inactiveStyle'
					}
				>
					Perfil
				</NavLink>
				<br />
				<br />
				<NavLink 
					to={'./account'}
					className={({ isActive }) =>
						isActive ? 'activeStyle' : 'inactiveStyle'
					}
				>
					Cuenta
				</NavLink>
			</section>
			<section className='profileContent'>
				<Outlet />
			</section>
		</div>
	);
}

export default Profile;
