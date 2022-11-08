import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { AuthProvider, AuthService, useAuth } from 'react-oauth2-pkce';




function AuthEnter(props: any) {
  const { t } = useTranslation();
  return (
    <div className='authEnterBody'>
        <h1><>{t('WelcomeAuth')}</></h1>
        <br />
        {/* <button className='authEnterButton' onClick= { props.toggleBool }>Acceder</button> */}
        <button className='authEnterButton'>Acceder</button>
    </div>
  )
}

export default AuthEnter;