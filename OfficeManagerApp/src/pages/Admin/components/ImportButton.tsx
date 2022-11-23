import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import { AnyArray } from 'immer/dist/internal';


const ImportButton = (users: any) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({})

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = () =>{
        const ws = XLSX.utils.json_to_sheet(users.users);
        const wb = { Sheets: { 'data': ws}, SheetNames: ['data']};
        const excelBuffer = XLSX.write(wb, { bookType:'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, "users" + fileExtension);
    }

    function maxCell(cell1: any, cell2: any) {
        if (cell1 > cell2) {
            return cell1
        } else {
            return cell2
        } 
    }

    function maxArray(array: any) {
        var max = ''
        array.forEach((elem: any)=>{
            max = maxCell(max, elem)
        })
        return max
    }

    function nextChar(letter: any) {
        return String.fromCharCode(letter.charCodeAt(0) + 1);
    }

    const readFile = (event: any) =>{
        console.log(event.target.files)
        event.preventDefault();
        if(event.target.files){
            console.log("a")
            const reader = new FileReader();

            reader.onload = (event: any) => {
                const data = event.target.result;
                const workbook = XLSX.read(data, {type: "array" })
                workbook.SheetNames.forEach((sheet)=>{
                    const worksheet = workbook.Sheets[sheet]
                    let largestCell = maxArray(Object.keys(worksheet));
                    const lastRow: any = largestCell.slice(1);
                    const lastColumn = largestCell.slice(0,1);
                    let array = {};
                    for (let row = 1; row < lastRow ; row++) {
                        let object = { ID: "", firstName: "", isAdmin: "", email: "", passw: "" }
                        for (let column = 'A'; column < lastColumn; column = nextChar(column)) {
                            let cellValue = worksheet[`${column}${row}`]['v']
                            console.log(cellValue);
                        }
                   }
               })
            }
            reader.readAsArrayBuffer(event.target.files[0]);
        }
    }
    
    return(
        <div className='exportButton'>
        <button  onClick={() => {setOpen(true)}}> Importar usuarios <FontAwesomeIcon icon={faFileImport}/> </button>
        <Popup 
            open = {open}
            onClose={() => {setOpen(false)}}
            modal
            nested
            >
            <div className="modalDelete">
                <div className='content'>
                    <div className='header'>
                        <h3> Importar Usuarios: </h3>
                    </div>
                    <div className='info'>
                        <input type="file" onChange={event => readFile(event)}></input>
                    </div>
                    <div className="actions"> 
                        <button className='blue' >
                            Importar
                        </button>
                        <button className='red' onClick={() => { setOpen(false); }}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
        </div>
    )
};
    
export default ImportButton;