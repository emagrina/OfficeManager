import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Profile() {
	return (
		<div className='profileBody'>
			<section className='profileHeader'>Hola usuario</section>
			<section className='profileLinks'>
				<NavLink to={'./data'}>Perfil</NavLink>
				<br />
				<NavLink to={'./account'}>Cuenta</NavLink>
			</section>
			<section className='profileContent'>
				<Outlet />
			</section>
		</div>
	);
}

export default Profile;
