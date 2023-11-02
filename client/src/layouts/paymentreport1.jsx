import React, { useEffect, Component } from 'react';
import { Box, Grid, Typography, Fade, Paper } from '@mui/material/';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import CalendarEventComponent from '../components/CalendarEventComponent';
import DashboardCard from '../components/DashboardCardComponent';
import PaymentTable from '../components/PaymentTable';
import TableHeaderComponent from '../components/TableHeaderComponent';
import ProgramsIcon from '../assets/icons/programs.png';
import StaffIcon from '../assets/icons/staff.png';
import UsersIcon from '../assets/icons/users.png';
import data from '../components/DummyData';
import DownloadButton from '../assets/icons/Maskgroup.png'
import useAuth from "../hooks/useAuth";
import useAxiosMethods from '../hooks/useAxiosMethods';


// const users_URL = "http://localhost:8080/api/users/getUsers"


const Layout1 = () => {
    const URL = "paymentlist/staff"
    const {get} = useAxiosMethods();
    // const [users, setUsers] = useState([]);
    

    // useEffect(() => {
    //     console.log("useeffecter ran");
    //     // setData1(data);
    //     try{
    //         get(URL, setData2)

    //     }catch(e){
    //         console.error(e,"error in getdata for individual payment list");
    //     }    
    // }, []);

    const columns = ['No', 'Name of the Course Lecturer/ Technical Assistant', 'Subject', ' Lecture Hours', 'Tutorials/Practical Hours', 'Hours as a technical assistant', 'Rate  Rs. ', 'Total Payment Rs.', 'Total Payment to each Lecturer Rs.'];
    
    const done = 0;
    const btn = 0;
    const title = 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE';
    const title2 = 'For The Month of August';


    return (
        
    

        <PaymentTable title2={title2} title={title} columns={columns} data={data} done={done} btn={btn} />
        
    );
};

const Layout2 = () => {
    const URL = "paymentlist/pcmcs"
    const {get} = useAxiosMethods();

    // const [users, setUsers] = useState([]);
    

    // useEffect(() => {
    //     axios.get(users_URL)
    //         .then(res => {
    //             console.log(res)
    //             setUsers(res.data);
    //         });
    // }, []);

    const columns = ['No', 'Name of the Course Lecturer/ Technical Assistant', 'Subject', ' Lecture Hours', 'Tutorials/Practical Hours', 'Hours as a technical assistant', 'Rate  Rs. ', 'Total Payment Rs.', 'Total Payment to each Lecturer Rs.'];
    
    const done = 0;
    const btn = 0;
    const title = 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE';
    const title2 = 'For The Month of August';


    return (
        
    

        <PaymentTable title2={title2} title={title} columns={columns} data={data} done={done} btn={btn} />
        
    );
};

const Layout3 = () => {
    const URL = "paymentlist/pcmis"
    const {get} = useAxiosMethods();

    // const [users, setUsers] = useState([]);
    

    // useEffect(() => {
    //     axios.get(users_URL)
    //         .then(res => {
    //             console.log(res)
    //             setUsers(res.data);
    //         });
    // }, []);

    const columns = ['No', 'Name of the Course Lecturer/ Technical Assistant', 'Subject', ' Lecture Hours', 'Tutorials/Practical Hours', 'Hours as a technical assistant', 'Rate  Rs. ', 'Total Payment Rs.', 'Total Payment to each Lecturer Rs.'];
    
    const done = 0;
    const btn = 0;
    const title = 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE';
    const title2 = 'For The Month of August';


    return (
        
    

        <PaymentTable title2={title2} title={title} columns={columns} data={data} done={done} btn={btn} />
        
    );
};

const Layout4 = () => {
    const URL = "paymentlist/pcmit"
    const {get} = useAxiosMethods();

    // const [users, setUsers] = useState([]);
    

    // useEffect(() => {
    //     axios.get(users_URL)
    //         .then(res => {
    //             console.log(res)
    //             setUsers(res.data);
    //         });
    // }, []);

    const columns = ['No', 'Name of the Course Lecturer/ Technical Assistant', 'Subject', ' Lecture Hours', 'Tutorials/Practical Hours', 'Hours as a technical assistant', 'Rate  Rs. ', 'Total Payment Rs.', 'Total Payment to each Lecturer Rs.'];
    
    const done = 0;
    const btn = 0;
    const title = 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE';
    const title2 = 'For The Month of August';


    return (
        
    

        <PaymentTable title2={title2} title={title} columns={columns} data={data} done={done} btn={btn} />
        
    );
};

const Layout5 = () => {
    const URL = "paymentlist/pcmba"
    const {get} = useAxiosMethods();

    // const [users, setUsers] = useState([]);
    

    // useEffect(() => {
    //     axios.get(users_URL)
    //         .then(res => {
    //             console.log(res)
    //             setUsers(res.data);
    //         });
    // }, []);

    const columns = ['No', 'Name of the Course Lecturer/ Technical Assistant', 'Subject', ' Lecture Hours', 'Tutorials/Practical Hours', 'Hours as a technical assistant', 'Rate  Rs. ', 'Total Payment Rs.', 'Total Payment to each Lecturer Rs.'];
    
    const done = 0;
    const btn = 0;
    const title = 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE';
    const title2 = 'For The Month of August';


    return (
        
    

        <PaymentTable title2={title2} title={title} columns={columns} data={data} done={done} btn={btn} />
        
    );
};

const Layout6 = () => {
    const URL = "paymentlist/dr"
    const {get} = useAxiosMethods();

    // const [users, setUsers] = useState([]);
    

    // useEffect(() => {
    //     axios.get(users_URL)
    //         .then(res => {
    //             console.log(res)
    //             setUsers(res.data);
    //         });
    // }, []);

    const columns = ['No', 'Name of the Course Lecturer/ Technical Assistant', 'Subject', ' Lecture Hours', 'Tutorials/Practical Hours', 'Hours as a technical assistant', 'Rate  Rs. ', 'Total Payment Rs.', 'Total Payment to each Lecturer Rs.'];
    
    const done = 0;
    const btn = 0;
    const title = 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE';
    const title2 = 'For The Month of August';


    return (
        
    

        <PaymentTable title2={title2} title={title} columns={columns} data={data} done={done} btn={btn} />
        
    );
};

const Layout7 = () => {
    const URL = "paymentlist/head"
    const {get} = useAxiosMethods();

    // const [users, setUsers] = useState([]);
    

    // useEffect(() => {
    //     axios.get(users_URL)
    //         .then(res => {
    //             console.log(res)
    //             setUsers(res.data);
    //         });
    // }, []);

    const columns = ['No', 'Name of the Course Lecturer/ Technical Assistant', 'Subject', ' Lecture Hours', 'Tutorials/Practical Hours', 'Hours as a technical assistant', 'Rate  Rs. ', 'Total Payment Rs.', 'Total Payment to each Lecturer Rs.'];
    
    const done = 0;
    const btn = 0;
    const title = 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE';
    const title2 = 'For The Month of August';


    return (
        
    

        <PaymentTable title2={title2} title={title} columns={columns} data={data} done={done} btn={btn} />
        
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
                                    <TableHeaderComponent left ={'Payment Report'}  right={<img src={DownloadButton} alt="Download" height={20}  />} addbtn={false}  />
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