import React, { Component } from 'react';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Box, Grid } from '@mui/material/';
import FooterComponent from '../components/FooterComponent';
import AttendanceComponent from '../components/AttendanceComponent';

class attendance extends Component {
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
                            <AttendanceComponent />
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

export default attendance;