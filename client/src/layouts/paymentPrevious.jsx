import React, { Component } from 'react';
import { Box, Grid, Typography, Fade, Paper } from '@mui/material/';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import CalendarComponent from '../components/CalendarComponent';
import CalendarEventComponent from '../components/CalendarEventComponent';
import DashboardCard from '../components/DashboardCardComponent';
import PaymentTable from '../components/PaymentPreComponent';
import TableHeaderComponent from '../components/TableHeaderComponent';
import ProgramsIcon from '../assets/icons/programs.png';
import StaffIcon from '../assets/icons/staff.png';
import UsersIcon from '../assets/icons/users.png';
import data from '../components/DummyData';
import DownloadButton from '../assets/icons/Maskgroup.png'

// const users_URL = "http://localhost:8080/api/users/getUsers"


const Layout1 = () => {
    const columns = ['No', 'Date', 'Subject', 'Hours', 'Rate Rs', 'Amount', 'AttendanceStatus'];
    const data = [
        { No: '01', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved'},
        { No: '02', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved'},
        { No: '03', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved'},
        { No: '04', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved'},
        { No: '05', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved'},
        { No: '06', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved'},
    ];
    const done = 0;
    const btn = 0;


    return (
        
    

        <PaymentTable columns={columns} data={data} done={done} btn={btn} />
        
    );
};



class payment extends Component {
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
                        <Fade in={true} timeout={1000}><Grid item sx={{
                            display: 'grid',
                            marginBottom: 8,
                            marginLeft: '24px'
                            }}>
                            {/*========== Center ==========*/}
                            <Grid item>
                                {/* tables */}
                                <Grid sx={{ marginTop: 5 }}>
                                    <TableHeaderComponent left ={'General Voucher History'} addbtn={false}  />
                                    <Paper elevation={3}  style={{ maxHeight: '370px', overflowY: 'scroll', marginTop: '-15px' }}>

                                    <Layout1 />
                                    </Paper>

                                </Grid>
                              
                            </Grid>
                         
                        </Grid></Fade>
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

export default payment;