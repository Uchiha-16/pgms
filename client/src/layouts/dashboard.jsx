import React, { Component } from 'react';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Box, Grid } from '@mui/material/';

class dashboard extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2.2}>
                        <NavBarComponent />
                    </Grid>
                    <Grid item xs={9.8}>
                        <HeaderComponent />
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default dashboard;