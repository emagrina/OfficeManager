import ReactDOM from 'react-dom';
import React from 'react';
import '../../styles/sass/main.scss';

const Header = ({ name }: any) => {
	return (
		<header>
			<div className={'logo'}>
				<a href='#'>
					<img src='/InetumLogo.svg' alt='Logo Inetum' />
				</a>
			</div>
			<div className={'main-menu'}>
				<img src='/RandomPerson.jpg' alt='Perfil de usuario' />
			</div>
		</header>
	);
};

export default Header;
