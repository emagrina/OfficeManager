import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { KPIs, KPICalendar, Map, State } from './components/index';
import { useTranslation } from 'react-i18next';

function Home() {
	const Name = 'Ernest';
	const LastName = 'Magriñá';

	const { t } = useTranslation();
	const HomeSection = t('HomeSection');
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

					<KPIs title={t('KpiAvailableSeats')} value={'18'} type={'avaiable'} />
					<KPIs title={t('KpiOccupiedSeats')} value={'22'} type={'occupied'} />
				</section>
				<section className={'mapAndState'}>
					<Map title={t('SelectSeat')} />
					<State title={t('State')} />
				</section>
			</section>
		</>
	);
}

export default Home;
