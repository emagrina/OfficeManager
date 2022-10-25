import React from 'react';

// @ts-ignore
import MapImg from '../../../assets/img/Map.svg';
// @ts-ignore
import FreeLegendImg from '../../../assets/img/FreeLegendImg.svg';
// @ts-ignore
import BusyLegendImg from '../../../assets/img/BusyLegendImg.svg';
import { useTranslation } from 'react-i18next';

const Map = ({ title }: any) => {
	const { t } = useTranslation();

	return (
		<section className={'mapBody'}>
			<div>
				<div className={'Legend'}>
					<h3>{title}</h3>
					<div>
						<img src={FreeLegendImg} alt={t('AltAvailableLegendImgGreen')} />
						<p>{t('PAvailableLegend')}</p>
					</div>
					<div>
						<img src={BusyLegendImg} alt={t('AltOccupiedLegendImgRed')} />
						<p>{t('POccupiedLegend')}</p>
					</div>
				</div>
			</div>
			<img src={MapImg} alt='Mapa de las oficinas' />
		</section>
	);
};

export default Map;
