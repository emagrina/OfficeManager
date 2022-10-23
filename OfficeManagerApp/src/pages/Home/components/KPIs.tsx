import React, { ReactPropTypes } from 'react';

const KPIs = ({ title, value, type }: any) => {
	return (
		<div className={'kpiBody'}>
			<h3>{title}</h3>
			<p className={type}>{value}</p>
		</div>
	);
};

export default KPIs;
