import React, { Component } from 'react';
import GeneralTable from '../components/GeneralTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import Popup from '../components/PopupComponent';
import useAxiosMethods from '../hooks/useAxiosMethods';
import TableHeaderComponent from '../components/TableHeaderComponent';
import { headCells } from '../config/attendanceConfig';

// const users_URL = "/users/users"

const Layout1 = () => {
    // const [users, setUsers] = useState([]);
    // const { get } = useAxiosMethods();
    // console.log(users);
    // useEffect(() => {
    //     // Call the get method to fetch user data 
        
    //     get(users_URL, setUsers);
        
    // }, [get]);
    // console.log(users);

    // const columns = ['NAME', 'ROLE', 'STATUS', 'EMAIL', 'ACTION'];
    // const rows = users.map(user => ({
    //     NAME: `${user.firstname} ${user.lastname}`,
    //     ROLE: user.role,
    //     STATUS: 'ONLINE', 
    //     EMAIL: user.email,
    //     ACTION: 'Edit',
    //     ID: user.id,
    //     EMPLOYED: user.employedDate,
    //     PROFILEPIC: user.profileImage
    // }
    // ));


    // const rows = users.map(user => createData(
    //         `${user.firstname} ${user.lastname}`,
    //         user.role,
    //         'ONLINE', // Assuming you want to display a static status for all users
    //         user.email,
    //         'Edit'
    // ));


   // ====================== Dummy Data for testing ======================//
    function createData(TIME, COURSE, LECTURER, LECTURERCONFRIMATION, STAFFCONFIRMATION, STATUS1, ACTION) {
        return {
            TIME,
            COURSE,
            LECTURER,
            LECTURERCONFRIMATION,
            STAFFCONFIRMATION,
            STATUS1,
            ACTION
        };
    }
    const rows = [
        createData('10.45 AM - 12.45 PM', 'Modelling and Simulation of Data', 'Dr. Smith', 'PENDING', 'MARKED', '1', 'Inform'),
        createData('12.45 AM - 2.45 PM', 'Individual Research Project', 'Prof. Johnson', 'PENDING', 'PENDING', '0', 'Inform'),
        // Add more rows...
    ];

    return (
        <GeneralTable rows={rows} headCells={headCells} />
    );
};

class AttendaceTrackingTable extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        {/* <NavBarComponent /> */}
                    </Grid>
                    <Grid container xs={9.3} sx={{ 
                        display: 'grid', 
                        gridTemplateRows: '16.5% auto 10%',
                        height: '100vh', 
                        marginTop: '55px',
                        }}>
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        <Grid item>
                            {/* content */}
                            <TableHeaderComponent left="Master of Information Technology Program" right="" />
                            <Layout1 />
                        </Grid>
                        <Grid item>
                            <FooterComponent />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}


export default AttendaceTrackingTable;