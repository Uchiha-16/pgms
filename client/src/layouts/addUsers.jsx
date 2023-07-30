import React, { Component } from 'react';
import Popup from '../components/PopupComponent';
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import { Box, Grid } from '@mui/material/';


class addUser extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Popup />
                    </Grid> 
                    
                </Grid>
            </Box>
        );
    }
}

export default addUser;