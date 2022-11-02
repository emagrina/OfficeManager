import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ReactDOM from 'react-dom';

const CalendarHome = () => {
	const [value, onChange] = useState(new Date());
	console.log(value);
	return (
		<div>
			<Calendar onChange={onChange} value={value} />
		</div>
	);
};

export default CalendarHome;
