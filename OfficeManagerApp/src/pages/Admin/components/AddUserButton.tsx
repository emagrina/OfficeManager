import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const AddUserButton = () => {
	return (
        <button className='addUserButton'> Añadir Usuario <FontAwesomeIcon icon={faUserPlus} ></FontAwesomeIcon> </button>
    );
};
    
export default AddUserButton;