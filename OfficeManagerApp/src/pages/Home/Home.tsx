import React from 'react';
import Header from '../../components/Header/Header';
//import { KPIs, KPICalendar, Map } from './components/index';
import { useTranslation } from 'react-i18next';

function Home() {
	const Name = 'Ernest';
	const LastName = 'Magriñá';

	const { t } = useTranslation();
	return (
		<>
			<div className={'homeBody'}></div>
			<Header name={Name} lastName={LastName} />
			<section className={'homeSection'}>
				<h2>
					¡Hey! &#128075;
					{t('HomeSection')}
					<span>{Name}</span>
				</h2>
				<section className={'kpiSection'}>
					<KPICalendar title={t('KpiCalendar')} />

					<KPIs title={t('KpiAvailableSeats')} value={'18'} type={'avaiable'} />

					<KPIs title={t('KpiOccupiedSeats')} value={'6'} type={'occupied'} />
				</section>
				<section className={'mapAndState'}>
					<Map title={t('SelectSeat')} />
				</section>
			</section>
		</>
	);
}

export default Home;
