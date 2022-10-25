import React from 'react';

// @ts-ignore
import MapImg from '../../../assets/img/Map.svg'
// @ts-ignore
import FreeLegendImg from '../../../assets/img/FreeLegendImg.svg';
// @ts-ignore
import BusyLegendImg from '../../../assets/img/BusyLegendImg.svg';

const Map = ({ title }: any) => {
	return (
		<section className={'mapBody'}>
			<div>
				<div className={'Legend'}>
					<h3>{title}</h3>
					<div>
						<img src={FreeLegendImg} alt='Cuadrado verde' />
						<p>Libre</p>
					</div>
					<div>
						<img src={BusyLegendImg} alt='Cuadrado rojo' />
						<p>Ocupado</p>
					</div>
				</div>
			</div>
			<img src={MapImg} alt='Mapa de las oficinas' />
		</section>
	);
};

export default Map;
