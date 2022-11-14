import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { AuthService } from '../../services/AuthService';


function Auth() {
    const { t } = useTranslation();

    const iniciarSesion = () => {
        console.log('login');
    }

	return (
        <div className='authBody'>
            <button className='authSubmit' onClick={() => iniciarSesion()}>
				<>{t('LoginAuth')}</>
			</button>
        </div>
    )
}

export default Auth;
