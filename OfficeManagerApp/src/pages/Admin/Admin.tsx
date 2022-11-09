import React from 'react';
import SideBar from './components/SideBar';
import Header from '../../components/Header/Header';
import '../../styles/sass/layout/__layouts-dir.scss';
import { Outlet } from 'react-router-dom';

export default function Admin() {
	return (
		<div className="adminPage">
			<Header></Header>
			<div className='adminBody'>
				<div className='showSideBar'>
					<SideBar></SideBar>
				</div>
				<div className='showContent'>
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
}
