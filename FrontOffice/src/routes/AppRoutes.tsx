import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { HomePage, AuthPage, AdminPage, NotFoundPage } from '@pages/index';
import { useEffect } from 'react';

function AppRoutes() {
	let logged = true;
	useEffect(() => {
		logged = localStorage.getItem('credentials') != null;
	}, []);

	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={logged ? <HomePage /> : <Navigate replace to='/auth' />}
				/>
				<Route
					path='/home'
					element={logged ? <HomePage /> : <Navigate replace to='/auth' />}
				/>
				<Route
					path='/admin'
					element={logged ? <AdminPage /> : <Navigate replace to='/auth' />}
				/>

				<Route
					path='/auth'
					element={!logged ? <AuthPage /> : <Navigate replace to='/' />}
				/>

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default AppRoutes;
