import React, { Component } from 'react';
import { Box, Grid, Typography, Fade } from '@mui/material/';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
// import CalendarComponent from '../components/CalendarComponent';
import CalendarEventComponent from '../components/CalendarEventComponent';
import DashboardCard from '../components/DashboardCardComponent';
import GeneralDashboardTable from '../components/GeneralDashboardTable';
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

    const columns = ['TIME', 'COURSE', 'STATUS'];
    const data = [
        { TIME: '10.45 AM - 12.45 PM', COURSE: 'BA3001 - Modelling and Simulation of Data', STATUS: 1},
        { TIME: '01.30 PM - 03.30 PM', COURSE: 'MCS3202 - Individual Research Project', STATUS: 0},
    ];
    const done = 0;
    const btn = 0;

    return (
        <GeneralDashboardTable columns={columns} data={data} done={done} btn={btn} />
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
        <GeneralDashboardTable columns={columns} data={data} done={done} btn={btn}/>
    );
};

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
                            marginLeft: '24px',
                            }}>
                            {/*========== Center ==========*/}
                            <Grid item>
                                {/* cards */}
                                <Grid container spacing={3} sx={{
                                    gridColumnGap: '5.9rem'
                                    }}>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <Box mb={1.5}>
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
                                {/* tables */}
                                <Grid sx={{ marginTop: 5, marginRight: 4 }}>
                                    <TableHeaderComponent left={'Todays Schedule'} right={'Sat 12th Aug, 2023'} addbtn={false}/>
                                    <Layout1 />
                                </Grid>
                                <Grid sx={{ marginTop: 5, marginRight: 4 }}>
                                    <TableHeaderComponent left={'Payment Vouchers'} right={''} addbtn={false} />
                                    <Layout2 />
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
                                    {/* <CalendarComponent /> */}
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
                        </Grid></Fade>
                        {/*============================== Footer ==============================*/}
                        <Grid item sx={{textAlign: 'center'}}>
                            <FooterComponent />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default dashboard;