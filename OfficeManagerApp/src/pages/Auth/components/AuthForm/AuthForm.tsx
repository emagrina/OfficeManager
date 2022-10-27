import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import md5 from 'md5';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const AuthForm = () => {
	const tokenUrl = 'https://localhost:7283/api/Account/GetToken';
	const userlistUrl = 'https://localhost:7283/api/Account/GetUserList';
	const weather = 'https://localhost:7283/WeatherForecast';

	let token = '';

	const [form, setForm] = useState({
		userName: '',
		password: '',
	});

	const handleChange = (e: { target: { name: any; value: any } }) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const iniciarSesion = async () => {
		await axios
			.post(tokenUrl, {
				userName: form.userName,
				password: form.password,
			})
			.then(response => {
				token = response.data.token;
				console.log(token);

				axios
					.get(userlistUrl, {
						headers: {
							Authorization: 'Bearer ' + token,
							'Access-Control-Allow-Origin': '*',
						},
					})
					.then(response => {
						console.log(response);
					});
			})
			.catch(error => {
				console.log(error);
			});
	};

	const { t } = useTranslation();

	return (
		<div className='authFormatBody'>
			<h1>{t('WelcomeAuth')}</h1>

			<label htmlFor='email'>{t('MailAuth')}</label>
			<br />
			<input type='email' id='email' name='email' onChange={handleChange} />
			<br />
			<br />
			<label htmlFor='password'>{t('PasswdAuth')}</label>
			<br />
			<input
				type='password'
				id='password'
				name='password'
				onChange={handleChange}
			/>
			<br />
			<div className='authError'>{t('ErrorAuth')}</div>
			<input type='checkbox' id='remember' name='remember' />
			<label htmlFor='remember'>{t('RememberAuth')}</label>
			<br />
			<a href={'/home'} className='authSubmit'>
				Entrar
			</a>
			<br />
			<button className='authSubmit' onClick={() => iniciarSesion()}>
				{t('LoginAuth')}
			</button>
		</div>
	);
};

export default AuthForm;
