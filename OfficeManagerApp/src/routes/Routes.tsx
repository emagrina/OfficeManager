import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Admin, Auth, Home } from '../pages';
import React from 'react';
import UserManagment from '@pages/Admin/components/UserManagment';
import RoomsManagment from '@pages/Admin/components/RoomsManagment';
import PageNotFound from '@pages/PageNotFound/PageNotFound';
import Profile from '@pages/Profile/Profile';
import ProfileData from '@pages/Profile/components/ProfileData/ProfileData';
import ProfileAccount from '@pages/Profile/components/ProfileAccount/ProfileAccount';
import ChairBookingsManagment from '@pages/Admin/components/ChairBookingsManagment';
import RoomBookingsManagment from '@pages/Admin/components/RoomBookingsManagment';
import ChairManagment from '@pages/Admin/components/ChairManagment';

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
						<Route path='/admin/ChairBookingsManagment' element={<ChairBookingsManagment />} />,
						<Route path='/admin/RoomBookingsManagment' element={<RoomBookingsManagment />} />,
						<Route path='/admin/ChairManagment' element={<ChairManagment />} />,
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
