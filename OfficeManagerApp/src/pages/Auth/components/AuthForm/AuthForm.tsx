import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import md5 from 'md5';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const AuthForm = () => {
	const tokenUrl = '';
	const apiUrl = '';

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
					.get(apiUrl, {
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
		<div className='authFormBody'>
			<h1><>{t('WelcomeAuth')}</></h1>
			<br />
			<label htmlFor='email'><>{t('MailAuth')}</></label>
			<br />
			<input type='email' id='email' name='email' onChange={handleChange} />
			<br />
			<br />
			<label htmlFor='password'><>{t('PasswdAuth')}</></label>
			<br />
			<input
				type='password'
				id='password'
				name='password'
				onChange={handleChange}
			/>
			<br />
			<div className='authError'><>{t('ErrorAuth')}</></div>
			<input type='checkbox' id='remember' name='remember' className='authRemember'/>
			<label htmlFor='remember'><>{t('RememberAuth')}</></label>
			<br />
			<button className='authSubmit' onClick={() => iniciarSesion()}>
				<>{t('LoginAuth')}</>
			</button>
		</div>
	);
};

export default AuthForm;
