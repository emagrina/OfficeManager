import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { CalendarHome } from './index';

const KPICalendar = ({ title }: any) => {
	return (
		<div className={'kpiBody'}>
			<h3>{title}</h3>

			<CalendarHome />
		</div>
	);
};

export default KPICalendar;
