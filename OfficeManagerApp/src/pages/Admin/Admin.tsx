import React from 'react';
import SideBar from './components/SideBar';
import Header from '../../components/Header/Header';
import '../../styles/sass/layout/__layouts-dir.scss'

export default function Admin() {
	return( 
	<div className='adminBody'>
		{/* <Header/> */}
		<div className='showSideBar'>
			<SideBar></SideBar>
		</div>
	</div>
	);
};
