import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import axios from 'axios';



const EditButton = (item: any) => {
    var user: any = {};
    Object.keys(item).map((k) => {
        user = item[k];
    }) 
    //const url = `https://localhost:7016/api/Users/${user['ID']}`;
    
    const [editStatus, setEditStatus] = useState(2)

    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        isAdmin: false,
        email: "",
    });

    const [open, setOpen] = useState(false);
    const closePopup = () => setOpen(false);

    useEffect(() => {
        if(editStatus == 2){
            startValue();
            setEditStatus(0);
        }

		// if(editStatus == 1){
        //     window.location.reload();
        //     console.log("reload")
        // }
		
	  });

    const editUser = async () =>{
        
    }

    const startValue = () => {
        let name = user.Name.split(" ");
        let newValue = {
            firstName: name[0],
            lastName: name[1],
            isAdmin: user.Admin == "Si" ? true : false,
            email: user.Email,
        }
        setValue(newValue);
    }

    const handleEvent = (event: any) => {
        setValue({...value, [event.target.name]: event.target.value})
    }

    const handleEventAdmin = (event: any) => {
        let admin = event.target.value == "true" ? true : false;
        setValue({...value, [event.target.name]: admin})
    }

    const showForm = () => {
        return(
            <>
            <p><label> 
            Nombre:
            <input type="text" name="firstName" value={value.firstName} onChange={event => {handleEvent(event) }}/> 
            </label> </p>
            <p><label> 
                Apellido:
                <input type="text" name="lastName" value={value.lastName} onChange={event => {handleEvent(event) }}/> 
            </label></p>
            <p><label> 
                Email:
                <input type="text" name="email" value={value.email} onChange={event => {handleEvent(event) }}/> 
            </label></p>
            Es admin?
            <div onChange={event => {handleEventAdmin(event) }}>
                <input type="radio" value="true" name="isAdmin" checked={value.isAdmin}/> Si
                <input type="radio" value="false" name="isAdmin" checked={!value.isAdmin} /> No
            </div> 
            </>
        )
    }

    return(
        <div className='editButton'>
            <button><FontAwesomeIcon icon={faPen} onClick={() => setOpen(true) }/></button>
            <Popup 
            open = {open}
            onClose={closePopup}
            modal
            nested
            >
            <div className="modalDelete">
                <div className='content'>
                    <div className='header'>
                        <h3> Editar usuario </h3>
                    </div>
                    <div className='info'>
                        {editStatus == 2 ? "Cargando..." : editStatus == 0 ? showForm() : editStatus == 1 ? "Se ha añadido correctamente" : editStatus == -1 ? "error" : ""}
                    </div>
                    <div className="actions"> 
                        <button className='blue' onClick={editUser}>
                                Enviar
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

export default EditButton;