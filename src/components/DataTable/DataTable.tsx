import React, { useState } from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams, GridRowModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { SearchForm } from '../../components/SearchForm';

interface gridData{
        [x: string]: any;
        id?:string;
    }

const columns: GridColDef[] = [
    { 
        field: 'image',
        description: 'This column has a value getter and is not sortable.',
        sortable: false, 
        width: 100,
        //valueGetter: (params: GridValueGetterParams) =>
            //`${params.getValue('image')}`
    },
    { field: 'album', headerName: 'Album', width: 140},
    { field: 'artist', headerName: 'Artist', width: 140},
    { field: 'release', headerName: 'Release', width: 90},
];

const rows = [
    { image: 'none', album: 'none', artist: 'none', release: 'none' }
];
 
export const DataTable = () => {

    let { searchData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({id:''});

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        server_calls.delete(gridData.id!)
        getData()
    }

    console.log(gridData.data.id)

    let handleCheckbox = (id:GridRowModel) => {
        if(id[0] === undefined){
            setData({id:''})
        }else{
            setData({id:id[0].toString()})
        }
    }

    return (
        <div style={{ height: 500, width: '100%' }}>
            <h2>My Vinyl Collection</h2>
            <DataGrid rows={searchData} columns={columns} pageSize={20} checkboxSelection onSelectionModelChange = { handleCheckbox } />

            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        </div>
    );
}