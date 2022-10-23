import React from 'react';
import AuthForm from './components/AuthForm/AuthForm';

function LoginUser() {
	return (
		<>
			<div className='authBody'>
				<div className='authImage'>Imagen</div>
				<div className='authForm'>
					<AuthForm />
				</div>
			</div>
		</>
	);
}

export default LoginUser;
