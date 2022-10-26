import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Admin, Auth, Home } from '../pages';
import React from 'react';
import UserManagment from '../pages/Admin/components/UserManagment';
import RoomsManagment from '../pages/Admin/components/RoomsManagment';
import BookingsManagment from '../pages/Admin/components/BookingsManagment';

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/home' element={<Home />} />
                <Route path='/admin' element={<Admin />} children={[
                    <Route path='/admin/roomsManagment' element={<RoomsManagment/>}/>,
                    <Route path='/admin/userManagment' element={<UserManagment/>}/>,
                    <Route path='/admin/bookingsManagment' element={<BookingsManagment/>}/>
                ]} />
            </Routes>
        </Router>
    );
}

export default Routers;
