import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Auth() {

	const onSuccess = (response: any) => console.log(response);
	const onFailure = (response: any) => console.error(response);


	return (
		<div className='authBody'>
			<div className='authForm'>
				{/*<OAuth2Login className='authEnterButton'
    				authorizationUrl="https://localhost:5003/connect/authorize"
    				responseType="code"
    				clientId="api-swagger"
    				redirectUri="https://localhost:5001/swagger/oauth2-redirect.html"
    				onSuccess={onSuccess}
    				onFailure={onFailure}
					scope="openid"
					isCrossOrigin={ true }
					extraParams={{
						code_challenge_method: 'S256',
						code_challenge: 'f31847aa868a388843c099ba823274bf666103f752fa3e9ece09fa22'
					}}
			
				/>
				*/}
			</div>
		</div>
	);
}

export default Auth;
