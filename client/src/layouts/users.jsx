import React, { Component } from 'react';
import GeneralTable from '../components/GeneralTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import useAxiosMethods from '../hooks/useAxiosMethods';

const users_URL = "/demo-controller/users"

const Layout1 = () => {
    const [users, setUsers] = useState([]);
    const {get} = useAxiosMethods();
    
    useEffect(() => {
        
            try {
                get(users_URL, setUsers);

            } catch (error) {
                console.log(error)
            }
    }, []);

    const columns = ['NAME', 'ROLE', 'STATUS', 'EMAIL', 'ACTION'];
    const data = users.map(user => ({
        NAME: `${user.firstName} ${user.lastName}`,
        ROLE: user.role,
        STATUS: 'ONLINE', // Assuming you want to display a static status for all users
        EMAIL: user.email,
        ACTION: 'Edit',
    }));

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