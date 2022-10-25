import { useEffect } from 'react';
import './styles/sass/main.scss';
// @ts-ignore
import * as eva from 'eva-icons';
import React from 'react';
import Routers from "./routes/Routes";

const App = () => {
	useEffect(() => {
		// add this line
		eva.replace();
	}, []);

	return <Routers />;
};

export default App;
