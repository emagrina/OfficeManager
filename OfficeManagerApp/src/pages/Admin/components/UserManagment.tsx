import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddUserButton from './AddUserButton';
import ShowManagmentTable from './ShowManagmentTable';
import ExportButton from './ExportButton';

const UserManagment = () => {
	const url = "https://localhost:7016/api/Users";
	const usersStart = [
		{ID: 1, Name: '', Admin: '', Email: ''},
		{ID: 1, Name: '', Admin: '', Email: ''},
	]

	const [users, setUsers] = useState(usersStart);
	const [hasLoaded, setHasLoaded] = useState('noLoaded');
	const [maxPages, setMaxPages] = useState(0);

	useEffect(() => {
		getUsersPrueba();
		//getUsers();

	  }, []);

	const getUsersPrueba = () => {
		let dbRawUsers = [
			{id: 1, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 2, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 3, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 4, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 5, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 6, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 7, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 8, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 9, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 10, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			{id: 11, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'},
			
		]

		let dbUsers = [];
		for (const user of dbRawUsers) {
			dbUsers.push({ID: user.id, Name: user.firstName + ' ' + user.lastName, Email : user.email, Admin : user.isAdmin ? 'Si' : 'No'})
		}

		setMaxPages(Math.trunc(dbUsers.length / 10));
		setHasLoaded('loaded');

		setUsers(dbUsers);
	};

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
				setMaxPages(Math.trunc(dbUsers.length / 10));
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
					<div className='upTable'>
						<h2> Gestor de usuarios</h2> 
						<AddUserButton></AddUserButton>
					</div>
					<ShowManagmentTable data={users} pages={maxPages} buttons={true}/>
					<ExportButton users={users}/>
				</div>
			);
		}
	}else if(hasLoaded == 'noLoaded'){
		return (
			<div className='userManagment'>
				<div className='upTable'>
					<h2> Gestor de usuarios</h2> 
				</div>
				Cargando...
			</div>
		);
	}else{
		return (
			<div className='userManagment'>
				Error
			</div>
		);
	}
};

export default UserManagment;
