import React from 'react';

const Map = ({ title }: any) => {
	return (
		<section className={'mapBody'}>
			<h3>{title}</h3>
			<img src='/Map.svg' alt='Mapa de las oficinas' />
		</section>
	);
};

export default Map;
