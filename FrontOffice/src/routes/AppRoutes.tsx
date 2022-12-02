import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {HomePage, AuthPage, AdminPage, NotFoundPage} from '@pages/index';

function AppRoutes() {
    const logged = false;
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={ (logged) ? <HomePage/> : <Navigate replace to='/auth'/> }/>
                <Route path='/home' element={ (logged) ? <HomePage/> : <Navigate replace to='/auth'/> }/>
                <Route path='/auth' element={ <AuthPage/> }/>
                <Route path='/admin' element={ (logged) ? <AdminPage/> : <Navigate replace to='/auth'/> }/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;