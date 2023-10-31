import React, { Component } from 'react';
import { Box, Grid, Typography, Fade, Paper, Button } from '@mui/material/';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import PaymentCard from '../components/PaymentCard';
import TableHeaderComponent from '../components/TableHeaderComponent';
import HStepper from '../components/HStepper';

// const users_URL = "http://localhost:8080/api/users/getUsers"


const Layout1 = () => {
 
    const columns = ['No', 'Date', 'Subject', 'Hours', 'Rate Rs', 'Amount', 'AttendanceStatus', 'AddtoVoucher'];
    const data = [
        { No: '01', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved', AddtoVoucher: 1},
        { No: '02', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved', AddtoVoucher: 0},
        { No: '03', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved', AddtoVoucher: 1},
        { No: '04', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved', AddtoVoucher: 1},
        { No: '05', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved', AddtoVoucher: 0},
        { No: '06', Date: '05/09/2023', Subject: 'MIS3202', Hours: 3, RateRs: 5000, Amount: 15000, AttendanceStatus: 'Approved', AddtoVoucher: 1},
    ];
    const done = 0;
    const btn = 0;

    return (
        <PaymentCard columns={columns} data={data} done={done} btn={btn} />
    );
};

const Layout2 = () => {

    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    const columns = ['Month', 'Completion'];
    const data = [
        { Month: currentMonth, Completion: '75%' },
    ];
    const done = 1;
    const btn = 1;

    return (
        <PaymentCard columns={columns} data={data} done={done} btn={btn}/>
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
                        gridTemplateRows: '149px',
                        }}>
                        {/*============================== Header ==============================*/}
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        {/*=============================== Main ===============================*/}
                        <Fade in={true} timeout={1000}><Grid item sx={{
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
                                height: '50%',
                                marginRight: '30px'
                                }}>
   
 <HStepper ></HStepper>
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
                            <Grid sx={{ marginTop: -2 }}>
                                
                             <TableHeaderComponent  center={'Payment Vouchers'} addbtn={false}/>

                             <Layout2 />
</Grid>
                               
                            </Grid>
                            
                        </Grid></Fade>

                           {/* tables */}
                           <Grid item sx={{ marginTop:-25, marginLeft:4}}>
<Grid item sx={{marginBottom:-2}}>
                                    <TableHeaderComponent   left ={'General Voucher - August 2020/2021 Intake'}  right={ <Button variant="contained" color="primary" style={{ textTransform: 'none' }}> Voucher History </Button>} />
                                    </Grid>
                                    <Paper elevation={3}  style={{ maxHeight: '230px', overflowY: 'scroll' }}>

                                    <Layout1 />
                                    </Paper>
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

export default payment;