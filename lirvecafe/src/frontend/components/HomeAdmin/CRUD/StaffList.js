// import React from 'react'

// export const StaffList = () => {
//     return (
//         <div>
//             Danh sách nhân viên
//         </div>
//     )
// }

import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'name', headerName: 'Name', width: 130},
    {field: 'phone', headerName: 'Phone', width: 130},
    {field: 'address', headerName: 'Address', width: 130},
];

const rows = [
    {id: 1, name: 'Nguyễn Văn A', phone: '0123456780', address: 'address1'},
    {id: 2, name: 'Nguyễn Văn B', phone: '0123456781', address: 'address2'},
    {id: 3, name: 'Nguyễn Văn C', phone: '0123456782', address: 'address3'},
    {id: 4, name: 'Nguyễn Văn D', phone: '0123456783', address: 'address4'},
];

export default function StaffList() {
    return (
        <div style={{height: 400, width: '100%', backgroundColor: 'white',}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

