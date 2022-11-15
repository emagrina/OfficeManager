import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import DeleteButton from './DeleteButton';



const ShowManagmentTable = ({data, pages, buttons}) => {
    const [page, setPage] = useState(0);
    const [isActive, setIsActive] = useState([false, false, false, false, false, false, false, false, false, false])
	const maxPages = pages;

    const mouseEnter = (index : any) => {
        setIsActive((prev) =>
            prev.map((element, i) => {
                if(i == index){
                    return true;
                }
                return false;
            }
            )
        );
    }

    const mouseLeave = (index : any) => {
        setIsActive((prev) =>
            prev.map((element, i) => {
                if(i == index){
                    return false;
                }
                return element;
            }
            )
        );
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

    const showButtons = ({index, item}) => {
        return(
            <td className='noBorder icons' style={{'visibility': `${isActive[index] ? 'visible' : 'hidden' }`}}>
                <div className='edit'> <FontAwesomeIcon icon={faPen} /> </div> 
                <div className='delete'> 
                <DeleteButton item={item}></DeleteButton>
                </div>
            </td>
        )
    }

    return(
        <div className='table'>
            <table>
                <tbody>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th className={key}>{key}</th>
                        ))}
                        {buttons ? <th className='noBorder'></th> : ""}
                    </tr>
                    {data.slice(10 * page, 10 * page + 10).map((item, index) => (
                        <tr onMouseEnter={() => mouseEnter(index)} onMouseLeave={() => mouseLeave(index)}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                        {buttons ? showButtons({index, item}) : ""}
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