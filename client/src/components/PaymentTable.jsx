import React, { Component } from 'react';
import { Box, Grid, Typography, Fade } from '@mui/material/';
import NavBarComponent from './NavbarComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import CalendarComponent from './CalendarComponent';
import CalendarEventComponent from './CalendarEventComponent';
import DashboardCard from './DashboardCardComponent';
import PaymentCard from './PaymentCard';
import TableHeaderComponent from './TableHeaderComponent';
import ProgramsIcon from '../assets/icons/programs.png';
import StaffIcon from '../assets/icons/staff.png';
import UsersIcon from '../assets/icons/users.png';
import Table from '../components/Table'; // Import the reusable Table component

class Dashboard extends Component {
    // ... your other code ...

    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavBarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{
                        display: 'grid',
                        gridTemplateRows: '149px auto 10%',
                    }}>
                        {/*============================== Header ==============================*/}
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        {/*=============================== Main ===============================*/}
                        <Fade in={true} timeout={1000}>
                            <Grid item sx={{
                                display: 'grid',
                                gridTemplateColumns: '75% 25%',
                                marginBottom: 10,
                                marginLeft: '24px'
                            }}>
                                {/*========== Center ==========*/}
                                <Grid item>
                                    {/* cards */}
                                    <Grid item sx={{
                                        borderRadius: '8px',
                                        background: 'white',
                                        boxShadow: '0px 3.720207452774048px 11px 0px rgba(0, 0, 0, 0.12)',
                                        display: 'grid',
                                        gridTemplateRows: '100px 280px auto',
                                        height: '20%',
                                        marginRight: '30px'
                                    }}>
                                        {/* Reusable Table */}
                                        <Table columns={columns} data={data} />
                                    </Grid>
                                </Grid>
                                {/*======= Right Sidebar =======*/}
                                <Grid item sx={{
                                    borderRadius: '8px',
                                    background: 'white',
                                    boxShadow: '0px 3.720207452774048px 11px 0px rgba(0, 0, 0, 0.12)',
                                    display: 'grid',
                                    gridTemplateRows: '100px 280px auto',
                                    height: '20%',
                                }}>
                                    <Grid sx={{ marginTop: -2,  }}>
                                        <TableHeaderComponent  center={'Payment Vouchers'} addbtn={false} />
                                        {/* You can add more components or content here */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Fade>
                        {/*============================== Footer ==============================*/}
                        <Grid item>
                            <FooterComponent />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Dashboard;
