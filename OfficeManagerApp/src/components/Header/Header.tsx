import React from 'react';

const Header = ({ name, lastName }: any) => {
	return (
		<>
			<header>
				<div className={'logo'}>
					<a href='#'>
						<img src='/InetumLogo.svg' alt='Logo Inetum' />
					</a>
				</div>
				<div className={'mainMenu'}>
					<img src='/RandomPerson.jpg' alt='Perfil de usuario' />
					<div className={'mainMenuContext'}>
						<p>
							{name} {lastName}
						</p>
						<i data-eva='chevron-down-outline' data-eva-fill='#000' />
					</div>
				</div>
			</header>
			<div className={'none'}></div>
		</>
	);
};

export default Header;
