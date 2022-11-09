import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {SharingDateService} from "../../../services/SharingDateService";

const CalendarHome = () => {
	const [value, onChange] = useState(new Date());
	SharingDateService.setSubject(value);

	return (
		<div>
			<Calendar onChange={onChange} value={value} />
		</div>
	);
};

export default CalendarHome;
