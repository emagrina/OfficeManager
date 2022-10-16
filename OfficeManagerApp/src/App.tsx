import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { urlClimas } from './endpoints';

function App() {
	useEffect(() => {
		axios.get(urlClimas).then((response: AxiosResponse<any>) => {
			console.log(response.data);
		});
	}, []);
	return (
		<div>
			<h1>hello!</h1>
		</div>
	);
}

export default App;
