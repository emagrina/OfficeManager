import React from 'react';

// @ts-ignore
import MapImg from '../../../assets/img/Map.svg'

const Map = ({ title }: any) => {
	return (
		<section className={'mapBody'}>
			<h3>{title}</h3>
			<img src={MapImg} alt='Mapa de las oficinas' />
		</section>
	);
};

export default Map;
