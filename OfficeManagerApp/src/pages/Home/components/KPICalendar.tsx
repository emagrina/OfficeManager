import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { CalendarBody } from './index';

const KPICalendar = ({ title }: any) => {
	return (
		<div className={'kpiBody'}>
			<h3>{title}</h3>
			<CalendarBody />
		</div>
	);
};

export default KPICalendar;
