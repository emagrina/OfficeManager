import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {SharingInformationService} from "../../../services/SharingInformationService";

const CalendarHome = () => {
	const [value, onChange] = useState(new Date());
	SharingInformationService.setSubject(value);

	return (
		<div>
			<Calendar onChange={onChange} value={value} />
		</div>
	);
};

export default CalendarHome;
