import React from 'react';

const SideBar = () => {
	return (
		<div className='sideBar'>
			<div className='infoSideBar'>
				<h3>Panel de administrador</h3>

				<ul>
					<div className='marcador'>
						<li> Gestor de usuarios </li>
					</div>
					<div className='marcador'>
						<li> Gestor de salas </li>
					</div>
					<div className='marcador'>
						<li> Gestor de reservas </li>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
