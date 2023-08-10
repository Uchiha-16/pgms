import React, { Component } from 'react';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Box, Grid, Typography } from '@mui/material/';
import FooterComponent from '../components/FooterComponent';
import CalendarComponent from '../components/CalendarComponent';
import CalendarEventComponent from '../components/CalendarEventComponent';

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
                                {/* content */}
                            </Grid>
                            {/*======= Right Sidebar =======*/}
                            <Grid item sx={{
                                borderRadius: '8px',
                                background: 'white',
                                boxShadow: '0px 3.720207452774048px 11px 0px rgba(0, 0, 0, 0.12)',
                                display: 'grid',
                                gridTemplateRows: '20% 55% auto',
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
                                <Grid item sx={{
                                    borderBottom: '1px solid #E0E0E0',
                                }}>
                                    <CalendarComponent />
                                </Grid>
                                {/* Description */}
                                <Grid item>
                                    <CalendarEventComponent />
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