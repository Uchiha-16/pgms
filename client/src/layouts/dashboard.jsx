import React, { Component } from 'react';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Box, Grid } from '@mui/material/';

class dashboard extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.2}>
                        <NavBarComponent />
                    </Grid>
                    <Grid container xs={9.6} sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        <Grid item>

                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default dashboard;