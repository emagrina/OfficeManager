import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFileExport } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import { AnyArray } from 'immer/dist/internal';
import axios from 'axios';


const ImportButton = (users: any) => {
    const url = `https://localhost:7016/api/Users`;

    const [open, setOpen] = useState(false);
    const [data, setData] = useState([['', '', '', '', false],['', '', '', '', false]])

    const [importStatus, setImportStatus] = useState(0);
    const [invalidFile, setInvalidFile] = useState(false);

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    useEffect(() => {
		if(importStatus == 1){
            window.location.reload();
        }
		
	  });

    const exportExemple = () =>{
        let ex = [{firstName: "Nombre1", lastName: "Apellido1", isAdmin: "true", email:"ejemplo1@inetum.com", passw:"constaseña1"},
                  {firstName: "Nombre2", lastName: "Apellido1", isAdmin: "false", email:"ejemplo2@inetum.com", passw:"constaseña2"}]
        const ws = XLSX.utils.json_to_sheet(ex);
        const wb = { Sheets: { 'ejemplo': ws}, SheetNames: ['ejemplo']};
        const excelBuffer = XLSX.write(wb, { bookType:'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, "plantilla" + fileExtension);
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

    function areKeysCorrect(keys: any){
        let correctKeys = ["email", "firstName", "isAdmin", "lastName", "passw"];
        if(keys.length != correctKeys.length){
            return false;
        }
        for (let i = 0; i < keys.length; i++) {
            if(keys[i] != correctKeys[i]){
                return false
            }  
        }     
        return true;
    }

    const addAllUsers = () =>{
        console.log("d:" + data)
        let i = 0;
        while (importStatus != -1 && i < data.length) {
            console.log(importStatus);
            addUser(data[i]);
            i++;
        }
        if (importStatus == 0) {
            setImportStatus(1);
        }
    }

    const addUser = async (user: any) =>{
        await axios
			.post(url, {
                "firstName": user[0],
                "lastName": user[1],
                "email": user[2],
                "passw": user[3],
                "isAdmin": user[4]
            }, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
			})
			.then(response => {		
                console.log(response.data)
                
			})
			.catch(error => {
				console.log(error);
                setImportStatus(-1);
			});
    }

    const readFile = (event: any) =>{
        event.preventDefault();
        if(event.target.files){
            const reader = new FileReader();

            reader.onload = (event: any) => {
                const data = event.target.result;
                const workbook = XLSX.read(data, {type: "array" })
                workbook.SheetNames.forEach((sheet)=>{
                    const worksheet = workbook.Sheets[sheet]
                    let largestCell = maxArray(Object.keys(worksheet));
                    const lastRow: any = largestCell.slice(1);
                    const lastColumn = largestCell.slice(0,1);
                    
                    var keys = [];
                    for (let column = 'A'; column <= lastColumn; column = nextChar(column)) {
                        let key = worksheet[`${column}${1}`]['v']
                        keys.push(key);
                    }
                    keys.sort();

                    if(areKeysCorrect(keys)){
                        let correctInfo = true;
                        let users = []
                        for (let row = 2; row <= lastRow && correctInfo ; row++) {
                            let user = ["firstName", "lastName", "email", "passw", true];

                            for (let column = 'A'; column <= lastColumn && correctInfo; column = nextChar(column)) {
                                let cellValue = worksheet[`${column}${row}`]['v']
                                if(worksheet[`${column}${1}`]['v'] == "firstName"){
                                    user[0] = cellValue;
                                } else if(worksheet[`${column}${1}`]['v'] == "lastName"){
                                    user[1] = cellValue;
                                } else if(worksheet[`${column}${1}`]['v'] == "email"){
                                    if(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i.test(cellValue)){
                                        user[2] = cellValue;
                                    }else{
                                        correctInfo = false;
                                    }
                                }else if(worksheet[`${column}${1}`]['v'] == "passw"){
                                    user[3] = cellValue;
                                }else if(worksheet[`${column}${1}`]['v'] == "isAdmin"){
                                    if(cellValue.toLowerCase() == "true"){
                                        user[4] = true;
                                    }else if(cellValue.toLowerCase() == "false"){
                                        user[4] = false;
                                    }else{
                                        correctInfo = false;
                                    }
                                    
                                }
                            }

                            users.push(user);
                       }

                       if(correctInfo){
                            console.log("users:" + users)
                            setData(users);
                       }else{
                            setInvalidFile(true);
                       }
                    }else{
                        setInvalidFile(true);
                    }
               })
            }
            reader.readAsArrayBuffer(event.target.files[0]);
        }
    }

    const form = () => {
        return(
            <>
            El archivo debe seguir el formato de la plantilla:
                        <button className='blueButton' onClick={() => exportExemple() }> Plantilla <FontAwesomeIcon icon={faFileExport}/> </button>
                        
                        <input type="file" onChange={event => readFile(event)}></input>
                        {invalidFile ? <span className='invalid'>El archivo no sigue el formato o hay algún dato incorrecto</span> : "" }
            </>
        )
    }
    
    return(
        <div className='importButton'>
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
                        {importStatus == 0 ? form() : importStatus == -1 ? "error" : ""}
                    </div>
                    <div className="actions"> 
                        <button className='blue' onClick={() => {addAllUsers()}} >
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