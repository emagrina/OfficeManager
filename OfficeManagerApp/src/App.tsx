import React from 'react';
import Routers from './routes/Routes';
import './styles/sass/main.scss';
import { useEffect } from 'react';
// @ts-ignore
import * as eva from 'eva-icons';

const App = () => {
	useEffect(() => {
		// add this line
		eva.replace();
	}, []);

	return <Routers />;
};

export default App;
