// @ts-ignore
import * as eva from 'eva-icons';
import { Auth } from './pages';
import { useEffect } from 'react';
import './styles/sass/main.scss';

const App = () => {
	useEffect(() => {
		// add this line
		eva.replace();
	}, []);
	return <Auth />;
};

export default App;
