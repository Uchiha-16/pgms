import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import NominationComponent from '../components/NominationComponent';
import NominationsTable from '../components/NominationsTable';
import { useEffect, useState } from "react";
import useAxiosMethods from '../hooks/useAxiosMethods';
import useAuth from "../hooks/useAuth";


const TableLayout = () => {
    const [nominations, setNominations] = useState([]);
    // Define filteredNominations variable
    let filteredNominations = [];
    const { auth } = useAuth();
    const { get } = useAxiosMethods();

    const nominations_StaffURL = "/nominations/nominations";
    const nominations_LecturerURL = `/nominations/nominations/${auth.user_id}`;    

    useEffect(() => {
        if(auth.role == "Lecturer"){
            get(nominations_LecturerURL, setNominations);
        }else{
            get(nominations_StaffURL, setNominations);
        }
    }, []);

    const columns = ['REQUEST', 'NAME', 'STATUS', 'DATE', 'ACTION'];

    const data = nominations.map(nomination => ({
        REQUEST: `Application for ${nomination.courseId} Lecturer`,
        NAME: `${nomination.user.firstname} ${nomination.user.lastname}` ,
        STATUS: 'Pending', 
        DATE: nomination.date,
        ACTION: 'Edit',
    }));

    return (
        <NominationsTable columns={columns} data={data} />
    );
}

class addNominations extends Component {
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

export default addNominations;
