import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {
	return (
		<div className='sideBar'>
      <div className='infoSideBar'>
        <h4>Panel de administrador</h4>

				<ul>
					<div className='marcador'>
						<li>
							<NavLink
								to={'./UserManagment'}
								className={({ isActive, isPending }) =>
									isActive ? 'active' : isPending ? 'pending' : ''
								}
							>
								{' '}
								Gestor de usuarios{' '}
							</NavLink>
						</li>
					</div>
					<div className='marcador'>
						<li>
							<NavLink to={'./RoomsManagment'}> Gestor de salas </NavLink>
						</li>
					</div>
					<div className='marcador'>
						<li>
							<NavLink to={'./BookingsManagment'}> Gestor de reservas </NavLink>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
