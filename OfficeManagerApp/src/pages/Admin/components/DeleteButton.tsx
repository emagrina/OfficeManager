import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import axios from 'axios';



const DeleteButton = (item: any) => {
    var user: Object = {};
    Object.keys(item).map((k) => {
        user = item[k];
    }) 
    const url = `https://localhost:7016/api/Users/${user['ID']}`;
    
    const [deleteStatus, setDeleteStatus] = useState(0)

    const [open, setOpen] = useState(false);
    const closePopup = () => setOpen(false);

    useEffect(() => {
		if(deleteStatus == 1){
            window.location.reload();
            console.log("reload")
        }
		
	  });

    const infoUser = () => {
        return(
            Object.keys(user).map((k) => (
                <p> {k} : {user[k]} </p>
            ))
        )
    }

    const deleteUser = async () =>{
        await axios
			.delete(url, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
			})
			.then(response => {		
                console.log(response.data)
				setDeleteStatus(1)
				
			})
			.catch(error => {
				console.log(error);
                setDeleteStatus(-1)
			});
    }

    const deleteUserPrueba = () => {
        setDeleteStatus(1);
    }

    return(
        <div className='deleteButton'>
            <button><FontAwesomeIcon icon={faXmark}size='xl' onClick={() => setOpen(true) }/></button>
            <Popup 
            open = {open}
            onClose={closePopup}
            modal
            nested
            >
            <div className="modalDelete">
                <div className='content'>
                    <div className='header'>
                        <h3> Quieres eliminar este usuario? </h3>
                    </div>
                    <div className='info'>
                        {deleteStatus == 0 ? infoUser() : deleteStatus == 1 ? "Se ha eliminado correctamente" : deleteStatus == -1 ? "error" : ""}
                    </div>
                    <div className="actions"> 
                        <button className='blue' onClick={deleteUser}>
                                Eliminar Usuario
                        </button>
                        <button className='red' onClick={() => { setOpen(false); }}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
            </Popup>
        </div>
    );

}

export default DeleteButton;