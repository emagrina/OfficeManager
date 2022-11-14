import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Admin, Auth, Home } from '../pages';
import React from 'react';
import UserManagment from '@pages/Admin/components/UserManagment';
import RoomsManagment from '@pages/Admin/components/RoomsManagment';
import BookingsManagment from '@pages/Admin/components/BookingsManagment';
import PageNotFound from '@pages/PageNotFound/PageNotFound';
import Profile from '@pages/Profile/Profile';
import ProfileData from '@pages/Profile/components/ProfileData/ProfileData';
import ProfileAccount from '@pages/Profile/components/ProfileAccount/ProfileAccount';

function Routers() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/home' element={<Home />} />
				<Route
					path='/admin'
					element={<Admin />}
					children={[
						<Route path='/admin/roomsManagment' element={<RoomsManagment />} />,
						<Route path='/admin/userManagment' element={<UserManagment />} />,
						<Route
							path='/admin/bookingsManagment'
							element={<BookingsManagment />}
						/>,
					]}
				/>
				<Route
					path='/profile'
					element={<Profile />}
					children={[
						<Route path='/profile/data' element={<ProfileData />} />,
						<Route path='/profile/account' element={<ProfileAccount />} />,
						<Route index element={<ProfileData />} />,
					]}
				/>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</Router>
	);
}

export default Routers;
