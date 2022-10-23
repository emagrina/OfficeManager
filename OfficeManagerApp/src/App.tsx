import { Admin, Auth, Home } from './pages';
import { useEffect } from 'react';
import './styles/sass/main.scss';
// @ts-ignore
import * as eva from 'eva-icons';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
	useEffect(() => {
		// add this line
		eva.replace();
	}, []);

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/home' element={<Home />} />
				<Route path='/home' element={<Admin />} />
			</Routes>
		</Router>
	);
};

export default App;
