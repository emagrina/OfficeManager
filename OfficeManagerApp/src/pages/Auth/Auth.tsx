import React from 'react';
import AuthForm from './components/AuthForm/AuthForm';

function Auth() {
	return (
		<div className='authBody'>
			<div className='authImage'>Imagen</div>
			<div className='authForm'>
				<AuthForm />
			</div>
		</div>
	);
}

export default Auth;
