import React, { useEffect, useState } from 'react';
import Header from '@components/Header/Header';
import { KPIs, KPICalendar, KPIMap, State } from './components/index';
import { useTranslation } from 'react-i18next';
import { SharingKPIAvailableService } from '@services/SharingKPIAvailableService';
import { Logger } from 'sass';

function Home() {
	const Name = 'Ernest';
	const LastName = 'Magriñá';

	const { t } = useTranslation();
	const HomeSection = t('HomeSection');

	const [KPIAvailable, setKPIAvailable] = useState(0);
	const subscription$ = SharingKPIAvailableService.getSubject();

	useEffect(() => {
		subscription$.subscribe(data => {
			// @ts-ignore
			return setKPIAvailable(data);
		});
	});
	return (
		<>
			<div className={'homeBody'}></div>
			<Header name={Name} lastName={LastName} />
			<section className={'homeSection'}>
				<h2>
					¡Hey! &#128075; {HomeSection} <span>{Name}</span>
				</h2>
				<section className={'kpiSection'}>
					<KPICalendar title={t('KpiCalendar')} />

					<KPIs
						title={t('KpiAvailableSeats')}
						value={74 - Number(KPIAvailable)}
						type={'avaiable'}
					/>
					<KPIs
						title={t('KpiOccupiedSeats')}
						value={KPIAvailable}
						type={'occupied'}
					/>
				</section>
				<section className={'mapAndState'}>
					<KPIMap title={t('SelectSeat')} />
					<State title={t('State')} />
				</section>
			</section>
		</>
	);
}

export default Home;