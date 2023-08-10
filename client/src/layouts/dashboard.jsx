import React, { Component } from 'react';
import { Box, Grid, Typography } from '@mui/material/';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import CalendarComponent from '../components/CalendarComponent';
import CalendarEventComponent from '../components/CalendarEventComponent';
import DashboardCard from '../components/DashboardCardComponent';
import ProgramsIcon from '../assets/icons/programs.png';
import StaffIcon from '../assets/icons/staff.png';
import UsersIcon from '../assets/icons/users.png';

class dashboard extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavBarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{
                        display: 'grid',
                        gridTemplateRows: '22% auto 10%',
                    }}>
                        {/*============================== Header ==============================*/}
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        {/*=============================== Main ===============================*/}
                        <Grid item sx={{
                            display: 'grid',
                            gridTemplateColumns: '75% 25%',
                            marginBottom: 10,
                        }}>
                            {/*========== Content ==========*/}
                            <Grid item>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <Box mb={1.5} sx={{
                                            borderRadius: '7px',
                                            boxShadow: '0px 13px 20px -7px rgba(0, 0, 0, 0.15)'
                                        }}>
                                            <DashboardCard
                                                icon={UsersIcon}
                                                title="Users"
                                                count="30"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <Box mb={1.5}>
                                            <DashboardCard
                                                icon={ProgramsIcon}
                                                title="Programs"
                                                count="4"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <Box mb={1.5}>
                                            <DashboardCard
                                                icon={StaffIcon}
                                                title="Staff"
                                                count="37"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/*======= Right Sidebar =======*/}
                            <Grid item sx={{
                                borderRadius: '8px',
                                background: 'white',
                                boxShadow: '0px 3.720207452774048px 11px 0px rgba(0, 0, 0, 0.12)',
                                display: 'grid',
                                gridTemplateRows: '100px 280px auto',
                                height: 'auto',
                            }}>

                                {/* Head */}
                                <Grid item sx={{
                                    display: 'flex',
                                    justifyContent : 'end',
                                    alignItems: 'center',
                                    marginRight: 3,
                                    marginLeft: 3,
                                    borderBottom: '1px solid #E0E0E0',
                                }}>
                                    <Typography variant='caption' sx={{
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        marginRight: 3,
                                        fontSize: '14px',
                                    }}>
                                        Ms. Anne Marie
                                    </Typography>
                                    <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: 8,
                                    }}/>
                                </Grid>

                                {/* Calendar */}
                                <Grid item>
                                    <CalendarComponent />
                                </Grid>

                                {/* Description */}
                                <Grid item sx={{
                                    borderTop: '1px solid #E0E0E0',
                                    marginLeft: 3,
                                    marginRight: 3,
                                }}>
                                    <CalendarEventComponent 
                                        date="Wednesday, 23 August 2023"
                                        time="10.45 AM"
                                        description="Modelling and Simulation of Data"
                                    />
                                    <CalendarEventComponent 
                                        date="Wednesday, 23 August 2023"
                                        time="01.30 PM"
                                        description="Individual Research Project Practical"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
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

export default dashboard;