import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';

const AddUserButton = () => {
    const url = `https://localhost:7016/api/Users}`;

    const [open, setOpen] = useState(false);
    const closePopup = () => setOpen(false);

    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        isAdmin: "",
        email: "",
        passw: ""
    })

    const handleEvent = (event: any) => {
        setValue({...value, [event.target.name]: event.target.value})
    }


	return (
        <>
        <button className='addUserButton' onClick={() => { setOpen(true); }}> Añadir Usuario <FontAwesomeIcon icon={faUserPlus} ></FontAwesomeIcon> </button>
        <Popup 
            open = {open}
            onClose={closePopup}
            modal
            nested
            >
            <div className="modalDelete">
                <div className='content'>
                    <div className='header'>
                        <h3> Añadir Usuario </h3>
                    </div>
                    <div className='info'>
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
                        <p><label> 
                            Contraseña:
                            <input type="text" name="passw" value={value.passw} onChange={event => {handleEvent(event) }}/> 
                        </label></p>
                        Es admin?
                        <div onChange={event => {handleEvent(event) }}>
                            <input type="radio" value="true" name="isAdmin"/> Si
                            <input type="radio" value="false" name="isAdmin"/> No
                        </div> 
                        
                    </div>
                    <div className="actions"> 
                        <button className='blue'>
                            Añadir Usuario
                        </button>
                        <button className='red' onClick={() => { setOpen(false); }}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
        </>
    );
};
    
export default AddUserButton;