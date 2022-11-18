import React from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

const ExportButton = (users: any) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = () =>{
        const ws = XLSX.utils.json_to_sheet(users.users);
        const wb = { Sheets: { 'data': ws}, SheetNames: ['data']};
        const excelBuffer = XLSX.write(wb, { bookType:'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, "users" + fileExtension);
    }
    
    return(
        <div className='exportButton'>
        <button  onClick={() => exportToCSV() }> Exportat usuarios <FontAwesomeIcon icon={faFileExport}/> </button>
        </div>
    )
};
    
export default ExportButton;