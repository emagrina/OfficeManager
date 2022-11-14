import React from 'react';
// @ts-ignore
import FreeLegendImg from '@assets/img/FreeLegendImg.svg';
// @ts-ignore
import BusyLegendImg from '@assets/img/BusyLegendImg.svg';
import { useTranslation } from 'react-i18next';
import { MapSeats } from './index';

const KPIMap = ({ title }: any) => {
	const { t } = useTranslation();

	const PAvailableLegend = t('PAvailableLegend');
	const POccupiedLegend = t('POccupiedLegend');
	return (
		<section className={'mapBody'}>
			<div>
				<div className={'Legend'}>
					<h3>{title}</h3>
					<div>
						<img src={FreeLegendImg} alt={t('AltAvailableLegendImgGreen')} />
						<p>{PAvailableLegend}</p>
					</div>
					<div>
						<img src={BusyLegendImg} alt={t('AltOccupiedLegendImgRed')} />
						<p>{POccupiedLegend}</p>
					</div>
				</div>
			</div>
			<MapSeats />
		</section>
	);
};

export default KPIMap;