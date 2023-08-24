import React, { Component } from 'react';
import GeneralTable from '../components/GeneralTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import useAxiosMethods from '../hooks/useAxiosMethods';
import TableHeaderComponent from '../components/TableHeaderComponent';
import { headCells } from '../config/userConfig';

const users_URL = "/users/users"

const Layout1 = () => {
    const [users, setUsers] = useState([]);
    const { get } = useAxiosMethods();
    console.log(users);
    useEffect(() => {
        // Call the get method to fetch user data
        
        get(users_URL, setUsers);
        
    }, [get]);
    console.log(users);

    // const columns = ['NAME', 'ROLE', 'STATUS', 'EMAIL', 'ACTION'];
    const rows = users.map(user => ({
        NAME: `${user.firstname} ${user.lastname}`,
        ROLE: user.role,
        STATUS: 'ONLINE', 
        EMAIL: user.email,
        ACTION: 'Edit',
        ID: user.id,
        EMPLOYED: user.employedDate,
        PROFILEPIC: user.profileImage
    }
    ));


    // const rows = users.map(user => createData(
    //         `${user.firstname} ${user.lastname}`,
    //         user.role,
    //         'ONLINE', // Assuming you want to display a static status for all users
    //         user.email,
    //         'Edit'
    // ));


   // ====================== Dummy Data for testing ======================//
    // function createData(NAME, ROLE, STATUS, EMAIL, ACTION) {
    //     return {
    //         NAME,
    //         ROLE,
    //         STATUS,
    //         EMAIL,
    //         ACTION
    //     };
    // }
    // const rows = [
    //     createData('Johny Michael', 'Lecturer', 'ONLINE', 'john@gmail.com', 'Edit'),
    //     createData('Alexa Liras', 'Lecturer', 'ONLINE', 'alexa@gmail.com', 'Edit'),
    //     createData('Laurent Perrier', 'Lecturer', 'OFFLINE', 'laurent@gmail.com', 'Edit'),
    //     createData('Michael Levi', 'Lecturer', 'ONLINE', 'michael@gmail.com', 'Edit'),
    //     createData('Richard Gran', 'Visiting Lecturer', 'ONLINE', 'richard@gmail.com', 'Edit'),
    //     createData('Miriam Eric', 'Lecturer', 'ONLINE', 'miriam@gmail.com', 'Edit'),
    //     createData('Anne Marie', 'Lecturer', 'ONLINE', 'annemarie@gmail.com', 'Edit'),
    //     createData('Nick Daniel', 'Visiting Lecturer', 'OFFLINE', 'nickdaniel@gmail.com', 'Edit'),
    //     createData('KitKat', 'Staff', 'OFFLINE', 'kitkat@gmail.com', 'Edit'),
    //     createData('Lollipop', 'Staff', 'ONLINE', 'lollipop@gmail.com', 'Edit'),
    //     createData('Marshmallow', 'Staff', 'OFFLINE', 'marshmellow@gmail.com', 'Edit'),
    //     createData('Nougat', 'Staff', 'ONLINE', 'nougat@gmail.com', 'Edit'),
    //     createData('Oreo', 'Staff', 'ONLINE', 'oreo@gmail.com', 'Edit'),
    // ];

    return (
        <GeneralTable rows={rows} headCells={headCells} />
    );
};

class users extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavBarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{ 
                        display: 'grid', 
                        gridTemplateRows: '16.5% auto 10%',
                        height: '100vh', 
                        }}>
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        <Grid item>
                            {/* content */}
                            {/* <Popup /> */}
                            <TableHeaderComponent left="Users" right="" addbtn={true} />
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

export default users;