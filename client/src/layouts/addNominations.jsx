import React, { Component } from 'react';
import Nominations from '../components/NominationComponent';
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import { Box, Grid } from '@mui/material/';


class addUser extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavbarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        <Grid item>
                            {/* content */}
                            <Grid item xs={12}>
                                <Nominations />
                            </Grid> 
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default addUser;