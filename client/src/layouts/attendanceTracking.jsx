import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import TableHeaderComponent from '../components/TableHeaderComponent';
import AttendanceTrackingComponent from '../components/AttendanceTrackingComponent';

const AttendanceTrackingLayout = () => {
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
                        {/* Display Degree Title 1 */}
                        <TableHeaderComponent left={'Master of Information Security'} right={'Sat 12th Aug, 2023'} />
                        <AttendanceTrackingComponent degree={'Degree Name 1'} /> {/* Pass degree name as prop */}
                        
                        {/* Display Degree Title 2 */}
                        <TableHeaderComponent left={'Master of Computer Science'} right={'Sat 12th Aug, 2023'} />
                        <AttendanceTrackingComponent degree={'Degree Name 2'} /> {/* Pass degree name as prop */}
                        
                        {/* Display Degree Title 3 */}
                        <TableHeaderComponent left={'Master of Information Technology'} right={'Sat 12th Aug, 2023'} />
                        <AttendanceTrackingComponent degree={'Degree Name 3'} /> {/* Pass degree name as prop */}
                        
                        {/* Display Degree Title 4 */}
                        <TableHeaderComponent left={'Master of Business Analytics'} right={'Sat 12th Aug, 2023'} />
                        <AttendanceTrackingComponent degree={'Degree Name 4'} /> {/* Pass degree name as prop */}
                    </Grid>
                    <Grid item>
                        <FooterComponent />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AttendanceTrackingLayout;
