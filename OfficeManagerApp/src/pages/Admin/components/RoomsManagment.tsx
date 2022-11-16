import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddUserButton from './AddUserButton';
import ShowManagmentTable from './ShowManagmentTable';

const RoomsManagment = () => {
	const url = "https://localhost:7016/api/Rooms";
	const roomsStart = [
		{ID: 1, Name: '', Size: 1},
		{ID: 1, Name: '', Size: 1}
	]
	const [rooms, setRooms] = useState(roomsStart);
	const [hasLoaded, setHasLoaded] = useState('noLoaded');
	const [maxPages, setMaxPages] = useState(0);

	useEffect(() => {
		getRooms();
	  }, [])

	const getRooms = async () => {
		await axios
			.get(url, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
			})
			.then(response => {
				console.log(response.data);		
				
				let dbRooms = [];
				for (const room of response.data) {
					dbRooms.push({ID: room.id, Name: room.name, Size: room.size})
					
				}
				setMaxPages(Math.trunc(dbRooms.length / 10));
				setRooms(dbRooms);
				setHasLoaded('loaded')
			})
			.catch(error => {
				console.log(error);
				setHasLoaded('error')
			});
	};

	if(hasLoaded == 'loaded'){
		if(rooms.length === 0){
			return (
				<div className='roomManagment'>
					<h2> Gestor de salas </h2>
					<div>
						No hay salas.
					</div>
				</div>
			);
		} else{
			return (
				<div className='roomManagment'>
					<div className='upTable'>
						<h2> Gestor de salas </h2>
					</div>
					<ShowManagmentTable data={rooms} pages={maxPages} buttons={false}/>
				</div>
			);
		}
	}else if(hasLoaded == 'noLoaded'){
		return (
			<div className='roomManagment'>
				<div className='upTable'>
					<h2> Gestor de salas </h2>
				</div>
				Cargando ...
			</div>
		);
	}else{
		return (
			<div className='roomManagment'>
				Error
			</div>
		);
	}
};

export default RoomsManagment;
