import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import md5 from 'md5';
import axios from 'axios';
import '../../../../styles/sass/main.scss';

const AuthForm = () => {

	const tokenUrl = 'https://localhost:7283/api/Account/GetToken';
	const userlistUrl = 'https://localhost:7283/api/Account/GetUserList';
	const weather = 'https://localhost:7283/WeatherForecast';

	let token = '';

	const [form, setForm]=useState({
		userName: '',
		password: ''
	});
	
	const handleChange=(e: { target: { name: any; value: any; }; })=>{
		const {name, value} = e.target;
		setForm({
			...form,
			[name]: value
		});
	};

	const iniciarSesion=async()=>{
		await axios.post(tokenUrl, {
			userName: form.userName,
			password: form.password
		})
		.then(response=>{
			token = response.data.token;
			console.log(token);

			axios.get(userlistUrl, {
				headers: {
					"Authorization": "Bearer " + token,
					"Access-Control-Allow-Origin": "*",
				}
			})
			.then(response=>{
				console.log(response);
			})
		})
		.catch(error=>{
			console.log(error);
		})
	}


	//const { t } = useTranslation();

	return (
		
			<div className='authFormatBody'>
				<h1>¡Bienvenido/a!</h1>
				
					<label htmlFor='email'>Email</label>
					<br />
					<input type='text' id='email' name='userName' onChange={handleChange}/>
					<br />
					<br />
					<label htmlFor='password'>Contraseña</label>
					<br />
					<input type='password' id='password' name='password' onChange={handleChange}/>
					<br />
					<div className='authError'>
						ERROR: Usuario o contraseña incorrectos
					</div>
					<input type='checkbox' id='remember' name='remember' />
					<label htmlFor='remember'>Recuérdame</label>
					<br />
					<a href={'/home'} className="authSubmit">Entrar</a>
					<br />
					<button className="authSubmit" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
					
				
			</div>
		
	);
};

export default AuthForm;
