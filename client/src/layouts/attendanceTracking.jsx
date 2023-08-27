import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import TableHeaderComponent from '../components/TableHeaderComponent';
import GeneralDashboardTable from '../components/GeneralDashboardTable';

const degreesData = [
    {
        degreeTitle: 'Master of Information Security',
        courses: [
            { time: '10:45 AM', course: 'Modelling and Simulation of Data', lecturer: 'Dr. Smith', attended: false },
            { time: '01:30 PM', course: 'Individual Research Project', lecturer: 'Prof. Johnson', attended: false }
            // Add more courses...
        ]
    },
    {
        degreeTitle: 'Master of Computer Science',
        courses: [
            { time: '09:00 AM', course: 'Advanced Algorithms', lecturer: 'Dr. Brown', attended: false },
            { time: '02:00 PM', course: 'Machine Learning', lecturer: 'Prof. Davis', attended: false }
            // Add more courses...
        ]
    },
    {
        degreeTitle: 'Master of Information Technology',
        courses: [
            { time: '09:00 AM', course: 'Advanced Algorithms', lecturer: 'Dr. Brown', attended: false },
            { time: '02:00 PM', course: 'Machine Learning', lecturer: 'Prof. Davis', attended: false }
            // Add more courses...
        ]
    },
    {
        degreeTitle: 'Master of Business Analytics ',
        courses: [
            { time: '09:00 AM', course: 'Advanced Algorithms', lecturer: 'Dr. Brown', attended: false },
            { time: '02:00 PM', course: 'Machine Learning', lecturer: 'Prof. Davis', attended: false }
            // Add more courses...
        ]
    },
];

const Layout1 = ({ degree }) => {
    const columns = ['TIME', 'COURSE', 'LECTURER', 'STATUS'];
    const data = degree.courses.map(course => ({
        TIME: course.time,
        COURSE: course.course,
        LECTURER: course.lecturer,
        STATUS: course.attended ? 1 : 0,
    }));
    const done = 0; // You might want to adjust this value based on your logic
    const btn = 0;  // You might want to adjust this value based on your logic

    return (
        <div>
            <TableHeaderComponent left={degree.degreeTitle} right={'Sat 12th Aug, 2023'} />
            <GeneralDashboardTable columns={columns} data={data} done={done} btn={btn} />
        </div>
    );
};


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
                        {degreesData.map((degree, index) => (
                            <Layout1 key={index} degree={degree} />
                        ))}
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
