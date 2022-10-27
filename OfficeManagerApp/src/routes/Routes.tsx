import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Admin, Auth, Home } from '../pages';
import React from 'react';

function Routers() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/home' element={<Home />} />
				<Route path='/admin' element={<Admin />} />
			</Routes>
		</Router>
	);
}

export default Routers;
