import React from 'react';
import { SidebarWithHeader, Cards } from '@components/container/index';

const HomePage = () => {
	return (
		<>
			<SidebarWithHeader children={<Cards></Cards>} />
		</>
	);
};

export default HomePage;
