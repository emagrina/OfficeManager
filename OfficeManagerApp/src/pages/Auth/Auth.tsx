import React, { useState } from 'react';
import AuthForm from './components/AuthForm/AuthForm';
import AuthEnter from './components/AuthEnter/AuthEnter';

function Auth() {

	const [bool, setbool] = useState(true);

	function toggleBool() {
		setbool(!bool)
	}

	return (
		<div className='authBody'>
			<div className='authForm'>
				{ bool ? <AuthEnter toggleBool={ toggleBool }/> : <AuthForm /> }
			</div>
		</div>
	);
}

export default Auth;
