import React from 'react';
import Header from '../../components/Header/Header';
import { KPIs, KPICalendar, Map } from './components/index';

function Home() {
	const Name = 'Ernest';
	const LastName = 'Magriñá';
	return (
		<>
			<div className={'homeBody'}></div>
			<Header name={Name} lastName={LastName} />
			<section className={'homeSection'}>
				<h2>
					¡Hey! &#128075; Bienvenido <span>{Name}</span>
				</h2>
				<section className={'kpiSection'}>
					<KPICalendar title={'Calendario:'} />

					<KPIs title={'Plazas libres:'} value={'18'} type={'free'} />

					<KPIs title={'Plazas ocupadas:'} value={'6'} type={'busy'} />
				</section>
				<section className={'mapAndState'}>
					<Map title={'Selecionar silla:'} />
				</section>
			</section>
		</>
	);
}

export default Home;
