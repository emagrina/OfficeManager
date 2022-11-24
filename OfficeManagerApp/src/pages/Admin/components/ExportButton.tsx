import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

const ExportButton = (users: any) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = () =>{
        let formatedUsers: any = []
        users.users.forEach((element: any) => {
            let name = element.Name.split(" ");
            let newElement = {
                firstName: name[0],
                lastName: name[1],
                isAdmin: element.Admin == "Si" ? "true" : "false",
                email: element.Email,
            }
            formatedUsers.push(newElement);
        });


        const ws = XLSX.utils.json_to_sheet(formatedUsers);
        const wb = { Sheets: { 'data': ws}, SheetNames: ['data']};
        const excelBuffer = XLSX.write(wb, { bookType:'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, "users" + fileExtension);
    }
    
    return(
        <div className='exportButton'>
        <button  onClick={() => exportToCSV() }> Exportar usuarios <FontAwesomeIcon icon={faFileExport}/> </button>
        </div>
    )
};
    
export default ExportButton;