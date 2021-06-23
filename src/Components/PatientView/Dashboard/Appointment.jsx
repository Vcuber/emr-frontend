import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 110,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 110,
    editable: false,
  },
  {
    field: 'time',
    headerName: 'Time',
    type: 'time',
    width: 110,
    editable: false,
  },
  {
    field: 'phno',
    headerName: 'Phone No:',
    type: 'number',
    width: 150,
    editable: false,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, date: '21/06/2021', time: '14:00' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, date: '21/06/2021', time: '14:00' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, date: '21/06/2021', time: '14:00' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, date: '21/06/2021', time: '14:00' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, date: '21/06/2021', time: '14:00' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, date: '21/06/2021', time: '14:00' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, date: '21/06/2021', time: '14:00' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, date: '21/06/2021', time: '14:00' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, date: '21/06/2021', time: '14:00' },
];

export default function Appointment() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}