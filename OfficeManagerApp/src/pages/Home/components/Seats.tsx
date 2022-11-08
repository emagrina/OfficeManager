import React, {useEffect, useState} from 'react';
import axios from "axios";
import { SharingInformationService } from '../../../services/SharingInformationService';

function Seats() {
    const [seats, setSeats] = useState([]);
    const [book, setBooking] = useState([]);
    const subscription$ = SharingInformationService.getSubject();

    useEffect(() => {
        const getSeats = async () => {
            const url = "https://localhost:7016/api/Chairs";


            await axios
                .get(url, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                })
                .then(response => {
                    setSeats(response.data)
                    console.log(seats);
                })
                .catch(error => {
                    console.log(error);
                });

        };
/*
        const getBooking = async () => {
            const url = "https://localhost:7016/api/Bookings?dateTime=" + 2022/11/4;

            await axios
                .get(url, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                })
                .then(response => {
                    let a = [
                        {
                            "id": 2,
                            "dateTime": new Date(2022, 11, 4).toLocaleDateString(),
                            "description": "Reserva de prueba",
                            "startTime": "0001-01-01T00:00:00",
                            "endTime": "0001-01-01T00:00:00",
                            "chair": 2,
                            "room": 0,
                            "user": 3
                        },
                        {
                            "id": 2,
                            "dateTime": new Date(2022, 11, 5).toLocaleDateString(),
                            "description": "Reserva de prueba",
                            "startTime": "0001-01-01T00:00:00",
                            "endTime": "0001-01-01T00:00:00",
                            "chair": 20,
                            "room": 0,
                            "user": 3
                        },
                        {
                            "id": 2,
                            "dateTime": new Date(2022, 11, 5).toLocaleDateString(),
                            "description": "Reserva de prueba",
                            "startTime": "0001-01-01T00:00:00",
                            "endTime": "0001-01-01T00:00:00",
                            "chair": 36,
                            "room": 0,
                            "user": 3
                        },

                    ]
                    // @ts-ignore
                    setBooking(a)
                    console.log(book);
                })
                .catch(error => {
                    console.log(error);
                });

        };
 getBooking()

 */
        getSeats()


    }, []);

    console.info(seats)
    console.info(book)

    return (
        <>
            {
                seats.map((seat, i) => {
                  //  let existsBooking = (book.find(a => a.chair === i)) ? 'occupied' : 'available'

                    return (
                        <g>
                            <path
                                // @ts-ignore
                                id={i}
                                className={''} d={
                                // @ts-ignore
                                seat.position
                            }/>
                        </g>
                    )
                })
            }
        </>
    );

}

export default Seats;