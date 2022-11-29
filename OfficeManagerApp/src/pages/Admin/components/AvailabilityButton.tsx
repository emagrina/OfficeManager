import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const EditButton = (item: any) => {
    var room: any = {};
    Object.keys(item).map((k) => {
        room = item[k];
    }) 
    var availability = room.Avaiable == "Si" ? true : false;

    const url = `https://localhost:7016/api/Rooms/${room['ID']}`;
    
    const [editStatus, setEditStatus] = useState(0)

    const [open, setOpen] = useState(false);
    const closePopup = () => setOpen(false);

    useEffect(() => {
		if(editStatus == 1){
            window.location.reload();
            console.log("reload")
        }
		
	  });

    const editRoom = async () =>{
        await axios
			.put(url, {
                "available": !availability,
            }, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
			})
			.then(response => {		
                console.log(response.data)
                setEditStatus(1);
			})
			.catch(error => {
				console.log(error);
                setEditStatus(-1);
			});
    }


    return(
        <div className='editButton'>
            <button><FontAwesomeIcon icon={faRotate} onClick={() => {editRoom()} }/></button>     
        </div>
    );

}

export default EditButton;
