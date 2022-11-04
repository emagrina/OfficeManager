import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoomsManagment = () => {
	const url = "https://localhost:7016/api/Rooms";
	const roomsStart = [
		{ID: 1, Name: '',},
		{ID: 1, Name: '',}
	]
	const [rooms, setRooms] = useState(roomsStart);
	const [hasLoaded, setHasLoaded] = useState('noLoaded');

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
					dbRooms.push({ID: room.id, Name: room.name})
					
				}
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
					<h2> Gestor de salas </h2>
					<div className='table'>
						<table>
							<tbody>
								<tr>
									{Object.keys(rooms[0]).map((key) => (
										<th className={key}>{key}</th>
									))}
								</tr>
								{rooms.map((item) => (
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
			<div className='roomManagment'>
				Cargando ...
			</div>
		);
	}else if(hasLoaded == 'error'){
		return (
			<div className='roomManagment'>
				Error
			</div>
		);
	}
};

export default RoomsManagment;
