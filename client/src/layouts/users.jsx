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
    useEffect(() => {
        // Call the get method to fetch user data
        
        get(users_URL, setUsers);
        
    }, []);


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