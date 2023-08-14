import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import NominationComponent from '../components/NominationComponent';
import NominationsTable from '../components/NominationsTable';
import { useEffect, useState } from "react";
import axios from '../api/axios';


    const nominations_URL = "/nominations/nominations"

    const TableLayout = () => {
        const [nominations, setnominations] = useState([]);
        
        useEffect(() => {
            const fetchUsers = async () => {
                try {
                    const response = await axios.get(nominations_URL); // Change the URL according to your backend setup
                    console.log(response.data.nominationsList);
                    setnominations(response.data.nominationsList);
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            };
    
            fetchUsers();
        }, []);
    
        const columns = ['REQUEST', 'NAME', 'STATUS', 'DATE', 'ACTION'];

        const data = nominations.map(nomination => ({
            REQUEST: `Application for ${nomination[0]} Lecturer`,
            NAME: `${nomination[5]} ${nomination[6]}`,
            STATUS: 'Pending', 
            DATE: nomination[1],
            ACTION: 'Edit',
        }
        ));
    
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
                    <Grid container xs={9.3} sx={{ 
                        display: 'grid', 
                        gridTemplateRows: '350px auto 10%',
                        }}>
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
                        {/*============================== Footer ==============================*/}
                        <Grid item>
                            <FooterComponent />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default addUser;
