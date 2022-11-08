import React, {useEffect, useState} from 'react';
import axios from "axios";
import { SharingDateService } from '../../../services/SharingDateService';
import {SharingKPIAvailableService} from "../../../services/SharingKPIAvailableService";

function Seats() {
    const [seats, setSeats] = useState([]);
    const [book, setBooking] = useState([]);
    const [selectDate, setSelectDate] = useState();
    const subscription$ = SharingDateService.getSubject();
    
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
        
        const getBooking = async () => {
            const url = "https://localhost:7016/api/Bookings";

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
                            "dateTime": new Date(2022, 11, 4),
                            "description": "Reserva de prueba",
                            "startTime": "0001-01-01T00:00:00",
                            "endTime": "0001-01-01T00:00:00",
                            "chair": 2,
                            "room": 0,
                            "user": 3
                        },
                        {
                            "id": 2,
                            "dateTime": new Date(2022, 11, 5),
                            "description": "Reserva de prueba",
                            "startTime": "0001-01-01T00:00:00",
                            "endTime": "0001-01-01T00:00:00",
                            "chair": 20,
                            "room": 0,
                            "user": 3
                        },
                        {
                            "id": 2,
                            "dateTime": new Date(2022, 11, 5),
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
                    console.log(error.message);
                });

        };

        getSeats()
        getBooking()
    }, []);

    useEffect(() => {
        subscription$.subscribe(data => {
            // @ts-ignore
            return setSelectDate(data.setHours(0, 0, 0, 0));
        });
    });
    
    let countOccupied: number = 0;
    useEffect(() => {
        SharingKPIAvailableService.setSubject(countOccupied);
    });
    
    return (
        <>
            {
                seats.map((seat, i) => {
                   
                    let currentDate = new Date().setHours(0,0,0,0)
                    let existsBooking;
                    
                    // @ts-ignore
                    if (book.find(a => a.chair === i)){
                        existsBooking = 'occupied'
                        countOccupied++;
                    } else {
                        // @ts-ignore
                        existsBooking = (currentDate > selectDate) ? 'available' : 'available-active'
                    }
                    return (
                        <g>
                            <path
                                // @ts-ignore
                                id={i}
                                className={existsBooking} d={
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