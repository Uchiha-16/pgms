import React, { Component } from 'react';
import { Box, Grid, Typography, Fade } from '@mui/material/';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import CalendarComponent from '../components/CalendarComponent';
import CalendarEventComponent from '../components/CalendarEventComponent';
import DashboardCard from '../components/DashboardCardComponent';
import PaymentTable from '../components/PaymentTable';
import TableHeaderComponent from '../components/TableHeaderComponent';
import ProgramsIcon from '../assets/icons/programs.png';
import StaffIcon from '../assets/icons/staff.png';
import UsersIcon from '../assets/icons/users.png';

// const users_URL = "http://localhost:8080/api/users/getUsers"


const Layout1 = () => {
    // const [users, setUsers] = useState([]);
    

    // useEffect(() => {
    //     axios.get(users_URL)
    //         .then(res => {
    //             console.log(res)
    //             setUsers(res.data);
    //         });
    // }, []);

    const columns = ['No', 'Name of the Course Lecturer/ Technical Assistant', 'Subject', ' Lecture Hours', 'Tutorials/Practical Hours', 'Hours as a technical assistant', 'Rate  Rs. ', 'Total Payment Rs.', 'Total Payment to each Lecturer Rs.'];
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
                            gridTemplateColumns: '75% 25%',
                            marginBottom: 10,
                            marginLeft: '24px'
                            }}>
                            {/*========== Center ==========*/}
                            <Grid item>
                                {/* tables */}
                                <Grid sx={{ marginTop: 5 }}>
                                    <TableHeaderComponent left ={'<'} center={'General Voucher - August 2020/2021 Intake'} right={'>'} addbtn={false}/>
                                    <Layout1 />
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