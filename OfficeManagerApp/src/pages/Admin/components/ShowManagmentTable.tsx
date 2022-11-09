import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'

const ShowManagmentTable = ({data, pages}) => {
    const [page, setPage] = useState(0);
    const [isActive, setIsActive] = useState(false)
	const maxPages = pages;

    const mouseEnter = (id : any) => {
        setIsActive(true);
    }

    const nextPage = () => {
		if(page == maxPages){
			setPage(0)
		} else{
			setPage(page + 1)
		}
	}

	const prevPage = () => {
		if(page == 0){
			setPage(maxPages)
		} else{
			setPage(page - 1)
		}
	}

    return(
        <div className='table'>
            <table>
                <tbody>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th className={key}>{key}</th>
                        ))}
                        <th className='noBorder'></th>
                    </tr>
                    {data.slice(10 * page, 10 * page + 10).map((item) => (
                        <tr className={item.ID} onMouseEnter={() => mouseEnter(item.ID)}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                        <td className='noBorder icons' style={{'visibility': `${isActive ? 'visible' : 'hidden' }`}}>
                            <div className='edit'> <FontAwesomeIcon icon={faPen} /> </div> 
                            <div className='delete'> <FontAwesomeIcon icon={faXmark}size='xl'/> </div>
                        </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
            <div className='pageButtons'>
                <button onClick={prevPage}> <FontAwesomeIcon icon={faChevronLeft} /> </button>
                <p>Pàgina {page + 1} de {maxPages + 1}</p>
                <button onClick={nextPage}> <FontAwesomeIcon icon={faChevronRight} /> </button>
            </div>
        </div>
    );

}

export default ShowManagmentTable;