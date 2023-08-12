import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import { Box, Grid } from '@mui/material/';
import NominationComponent from '../components/NominationComponent';
import NominationsTable from '../components/NominationsTable';
import { useEffect, useState } from "react";
import useAxiosMethods from '../hooks/useAxiosMethods';


    const nominations_URL = "/nominations/getAllNominations"

    const TableLayout = () => {
        const [nominations, setnominations] = useState([]);
        const {get} = useAxiosMethods();
        
        useEffect(() => {
            
                try {
                    get(nominations_URL, setnominations);
    
                } catch (error) {
                    console.log(error)
                }
        }, []);
    
        const columns = ['REQUEST', 'NAME', 'STATUS', 'DATE', 'ACTION'];

        const data = [
            {
                REQUEST: 'Application for MCS 2203 Lecturer',
                NAME: 'Dr. Kasun Gunawardhana',
                STATUS: 'Accepted',
                DATE: '2023-10-05',
                ACTION: 'Edit',
            },
            {
                REQUEST: 'Application for MIT 1201 Lecturer',
                NAME: 'Prof. Sarah Johnson',
                STATUS: 'Pending',
                DATE: '2023-09-20',
                ACTION: 'Edit',
            },
            // Add more static nominations as needed
        ];
        return (
            <NominationsTable columns={columns} data={data} />
        );
    }

class addUser extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavbarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        <Grid item>
                            {/* content */}
                            <Grid item xs={12}>
                                <TableLayout />
                                <NominationComponent />
                            </Grid>
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default addUser;
