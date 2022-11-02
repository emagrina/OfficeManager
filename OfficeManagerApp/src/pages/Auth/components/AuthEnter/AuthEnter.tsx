import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function AuthEnter(props: any) {
  const { t } = useTranslation();
  return (
    <div className='authEnterBody'>
        <h1><>{t('WelcomeAuth')}</></h1>
        <br />
        <button className='authEnterButton' onClick= { props.toggleBool }>Accedir</button>
    </div>
    
  )
}

export default AuthEnter;