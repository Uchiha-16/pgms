import React, { Component } from 'react';
import TimeTableComponent from '../components/TimeTableComponent';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';

const TimeTableLayout = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={2.5}>
                    {/* <NavBarComponent /> */}
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
                        <TimeTableComponent />
                    </Grid>
                    <Grid item>
                        <FooterComponent />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

class TimeTablePage extends Component {
    render() {
        return (
            <TimeTableLayout />
        );
    }
}

export default TimeTablePage;
