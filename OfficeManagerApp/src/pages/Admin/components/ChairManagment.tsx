import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowManagmentTable from './ShowManagmentTable';

const ChairManagment = () => {
	const url = "https://localhost:7016/api/Chairs";
	const bookingsStart = [
		{ID: 1, Available: ""},
		{ID: 1, Available: ""}
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
				for (const chair of response.data) {

					dbBookings.push({ID: chair.id, Available: chair.available ? "Si" : "No"})
					
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
					<h2> Gestor de sillas </h2>
					<div>
						No hay reservas.
					</div>
				</div>
			);
		} else{
			return (
				<div className='bookingManagment'>
					<div className='upTable'>
						<h2> Gestor de sillas </h2>
					</div>
					<ShowManagmentTable data={bookings} pages={maxPages} buttons={0}/>
				</div>
			);
		}
	}else if(hasLoaded == 'noLoaded'){
		return (
			<div className='bookingManagment'>
				<div className='upTable'>
						<h2> Gestor de sillas </h2>
					</div>
				Cargando ...
			</div>
		);
	}else{
		return (
			<div className='bookingManagment'>
				<div className='upTable'>
						<h2> Gestor de sillas </h2>
					</div>
				Error en la BD
			</div>
		);
	}
};

export default ChairManagment;
