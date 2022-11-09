import React, { ReactPropTypes } from 'react';
import CountUp from "react-countup";

const KPIs = ({ title, value, type }: any) => {
	return (
		<div className={'kpiBody'}>
			<h3>{title}</h3>
			<p className={type}>
				<CountUp start={50} end={value} duration={0.5} />
			</p>
		</div>
	);
};

export default KPIs;
