import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingsManagment = () => {
	const url = "https://localhost:7016/api/Bookings";
	const bookingsStart = [
		{ID: 1, Description: ''},
		{ID: 1, Description: ''}
	]
	const [bookings, setBookings] = useState(bookingsStart);
	const [hasLoaded, setHasLoaded] = useState('noLoaded');

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
				console.log(response.data);		
				
				let dbBookings = [];
				for (const booking of response.data) {
					dbBookings.push({ID: booking.id, Description: booking.description})
					
				}
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
					<h2> Gestor de reservas </h2>
					<div>
						No hay reservas.
					</div>
				</div>
			);
		} else{
			return (
				<div className='bookingManagment'>
					<h2> Gestor de reservas </h2>
					<div className='table'>
						<table>
							<tbody>
								<tr>
									{Object.keys(bookings[0]).map((key) => (
										<th className={key}>{key}</th>
									))}
								</tr>
								{bookings.map((item) => (
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
			<div className='bookingManagment'>
				Cargando ...
			</div>
		);
	}else if(hasLoaded == 'error'){
		return (
			<div className='bookingManagment'>
				Error
			</div>
		);
	}
};

export default BookingsManagment;
