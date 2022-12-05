import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowManagmentTable from './ShowManagmentTable';
import AddUserButton from './AddUserButton';

const RoomBookingsManagment = () => {
	const url = "https://localhost:7016/api/RoomBookings";
	const bookingsStart = [
		{ID: 1, Description: '', Start: "", End: "", Room: 1, User: 1},
		{ID: 1, Description: '', Start: "", End: "", Room: 1, User: 1},
	]
	const [bookings, setBookings] = useState(bookingsStart);
	const [hasLoaded, setHasLoaded] = useState('noLoaded');
	const [maxPages, setMaxPages] = useState(0);

	useEffect(() => {
		getBookings();
	  }, [])

	const getBookings = async () => {
		await axios
			.get(url, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
			})
			.then(response => {
				let dbBookings = [];
				for (const booking of response.data) {
					let dateStart = new Date(booking.startTime);
					let startString = dateStart.getHours() + ":" + dateStart.getMinutes() + " - " + dateStart.getDate() + "/" + (dateStart.getMonth() + 1) + "/" + dateStart.getFullYear();
					let dateEnd = new Date(booking.startTime);
					let endString = dateEnd.getHours() + ":" + dateEnd.getMinutes() + " - " +dateEnd.getDate() + "/" + (dateEnd.getMonth() + 1) + "/" + dateEnd.getFullYear();

					dbBookings.push({ID: booking.id, Description: booking.description, Start: startString, End: endString, Room: booking.roomId, User: booking.userId})
					
				}
				setMaxPages(Math.trunc(dbBookings.length / 10));
				setBookings(dbBookings);
				setHasLoaded('loaded')
			})
			.catch(error => {
				console.log(error);
				setHasLoaded('error')
			});
	};

	if(hasLoaded == 'loaded'){
		if(bookings.length === 0){
			return (
				<div className='bookingManagment'>
					<h2> Gestor de reservas: Salas </h2>
					<div>
						No hay reservas.
					</div>
				</div>
			);
		} else{
			return (
				<div className='bookingManagment'>
					<div className='upTable'>
						<h2> Gestor de reservas: Salas </h2>
					</div>
					<ShowManagmentTable data={bookings} pages={maxPages} buttons={0}/>
				</div>
			);
		}
	}else if(hasLoaded == 'noLoaded'){
		return (
			<div className='bookingManagment'>
				<div className='upTable'>
						<h2> Gestor de reservas: Salas </h2>
					</div>
				Cargando ...
			</div>
		);
	}else{
		return (
			<div className='bookingManagment'>
				<div className='upTable'>
						<h2> Gestor de reservas: Salas </h2>
					</div>
				Error en la BD
			</div>
		);
	}
};

export default RoomBookingsManagment;
