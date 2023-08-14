import React, { Component } from 'react';
import GeneralTable from '../components/GeneralTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import axios from '../api/axios';
import Popup from '../components/PopupComponent';

const users_URL = "/users/users"

const Layout1 = () => {
    const [users, setUsers] = useState([]);
    // const { get } = useAxiosMethods();
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(users_URL); // Change the URL according to your backend setup
                console.log(response.data.usersList);
                setUsers(response.data.usersList);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const columns = ['NAME', 'ROLE', 'STATUS', 'EMAIL', 'ACTION'];
    const data = users.map(user => ({
        NAME: `${user[0]} ${user[1]}`,
        ROLE: user[3],
        STATUS: 'OFFLINE', 
        EMAIL: user[2],
        ACTION: 'Edit',
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