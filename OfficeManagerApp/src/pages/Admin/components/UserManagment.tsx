import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagment = () => {
	const url = "https://localhost:7016/api/Admin";
	const usersStart = [
		{ID: 1, Name: 'Aleix', Admin: 'a', Email: 'aleix@gmail.com',},
		{ID: 1, Name: 'Aleix', Admin: 'a', Email: 'aleix@gmail.com',}
	]
	const [users, setUsers] = useState(usersStart);
	const [hasLoaded, setHasLoaded] = useState('noLoaded');

	useEffect(() => {
		getUsers();
	  }, [])

	const getUsers = async () => {
		await axios
			.get(url, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
			})
			.then(response => {
				console.log(response.data);		
				
				let dbUsers = [];
				for (const user of response.data) {
					dbUsers.push({ID: user.id, Name: user.firstName + ' ' + user.lastName, Email : user.email, Admin : user.isAdmin ? 'Si' : 'No'})
					
				}
				setUsers(dbUsers);
				setHasLoaded('loaded')
			})
			.catch(error => {
				console.log(error);
				setHasLoaded('error')
			});
	};

	if(hasLoaded == 'loaded'){
		if(users.length === 0){
			return (
				<div className='userManagment'>
					<h2> Gestor de usuarios </h2>
					<div>
						No hay usuarios.
					</div>
				</div>
			);
		} else{
			return (
				<div className='userManagment'>
					<h2> Gestor de usuarios </h2>
					<div className='table'>
						<table>
							<tbody>
								<tr>
									{Object.keys(users[0]).map((key) => (
										<th className={key}>{key}</th>
									))}
								</tr>
								{users.map((item) => (
									<tr key={item.ID}>
									{Object.values(item).map((val) => (
										(val == 'edit')? <td> <button> edit </button> </td> :
										(val == 'delete')? <td> <button> delete </button> </td> :
										<td>{val}</td>
									))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			);
		}
	}else if(hasLoaded == 'noLoaded'){
		return (
			<div className='userManagment'>
				Cargando ...
			</div>
		);
	}else if(hasLoaded == 'error'){
		return (
			<div className='userManagment'>
				Error
			</div>
		);
	}
};

export default UserManagment;
