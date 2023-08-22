import React, { Component } from 'react';
import GeneralTable from '../components/GeneralTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import Popup from '../components/PopupComponent';
import useAxiosMethods from '../hooks/useAxiosMethods';

const users_URL = "/users/users"

const Layout1 = () => {
    const [users, setUsers] = useState([]);
    const { get } = useAxiosMethods();
    
    useEffect(() => {
        // Call the get method to fetch user data
        get(users_URL, setUsers);
    }, []);


    const columns = ['NAME', 'ROLE', 'STATUS', 'EMAIL', 'ACTION'];
    const data = users.map(user => ({
        NAME: `${user.firstname} ${user.lastname}`,
        ROLE: user.role,
        STATUS: 'ONLINE', 
        EMAIL: user.email,
        ACTION: 'Edit',
        ID: user.id,
    }
    ));

    return (
        <GeneralTable columns={columns} data={data} />
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
                            <Popup />
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