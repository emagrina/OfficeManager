import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddUserButton from './AddUserButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'

function UserManagment (props: any){
	const url = "https://localhost:7016/api/Admin";
	const usersStart = [
		// id: 4, firstName: 'Judit', lastName: 'Sansó', isAdmin: true, email: 'judit@gmail.com'
		{ID: 1, Name: '', Admin: '', Email: ''},
		{ID: 1, Name: '', Admin: '', Email: ''},
	]

	const [users, setUsers] = useState(usersStart);
	const [hasLoaded, setHasLoaded] = useState('noLoaded');
	const [page, setPage] = useState(0);
	const [maxPages, setMaxPages] = useState(0);

	useEffect(() => {
		setHasLoaded('loaded')
		getUsersPrueba();
		//getUsers();
	  }, [])

	const nextPage = () => {
		if(page == maxPages){
			setPage(0)
		} else{
			setPage(page + 1)
		}
	}

	const prevPage = () => {
		if(page == 0){
			setPage(maxPages)
		} else{
			setPage(page - 1)
		}
	}

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
		

		setUsers(dbUsers);
	}

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
					<div className='table'>
						<table>
							<tbody>
								<tr>
									{Object.keys(users[0]).map((key) => (
										<th className={key}>{key}</th>
									))}
									<th className='noBorder'></th>
								</tr>
								{users.slice(10 * page, 10 * page + 10).map((item) => (
									<tr key={item.ID}>
									{Object.values(item).map((val) => (
										<td>{val}</td>
									))}
									<td className='noBorder icons'>
										<div> <FontAwesomeIcon icon={faPen} color="DodgerBlue" /> </div> 
										<div> <FontAwesomeIcon icon={faXmark} color="tomato" size='xl'/> </div>
									</td>
									</tr>
									
								))}
							</tbody>
						</table>
							<div className='pageButtons'>
								<button onClick={prevPage}> <FontAwesomeIcon icon={faChevronLeft} /> </button>
								<p>Pàgina {page + 1} de {maxPages + 1}</p>
								<button onClick={nextPage}> <FontAwesomeIcon icon={faChevronRight} /> </button>
							</div>
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
	}else{
		return (
			<div className='userManagment'>
				Error
			</div>
		);
	}
};

export default UserManagment;
