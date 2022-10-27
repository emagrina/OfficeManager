<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
>>>>>>> 70f7f92d18784dc09cabefea58b08341163e9bd3

const SideBar = () => {
	return (
		<div className='sideBar'>
<<<<<<< HEAD
			<div className='infoSideBar'>
				<h3>Panel de administrador</h3>
=======
      <div className='infoSideBar'>
        <h3>Panel de administrador</h3>

        <ul>
          <div className='marcador' >
            <li><NavLink 
              to={'./UserManagment'}
              className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }
            > Gestor de usuarios </NavLink></li>
          </div>
          <div className='marcador'>
            <li><NavLink to={'./RoomsManagment'}> Gestor de salas </NavLink></li>
          </div>
          <div className='marcador'>
            <li><NavLink to={'./BookingsManagment'}> Gestor de reservas </NavLink></li>
          </div>
        </ul>
      </div>
>>>>>>> 70f7f92d18784dc09cabefea58b08341163e9bd3

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
