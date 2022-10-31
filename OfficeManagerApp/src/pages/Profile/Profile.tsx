import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// @ts-ignore
import Imagen from '../../assets/img/RandomPerson.jpg';

function Profile({ name, lastName }: any) {
	return (
		<div className='profileBody'>
			<section className='profileHeader'>
				<img src={Imagen} className='profileImage' /> <span className='profileName'> Lluís Isern </span>
			</section>
			<section className='profileLinks'>
				<NavLink 
					to={'./data'}
					className={({ isActive }) =>
						isActive ? 'activeStyle' : 'inactiveStyle'
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
