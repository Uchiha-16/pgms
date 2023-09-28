import React, { Component } from 'react';
import { Box, Grid } from '@mui/material/';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import TableHeaderComponent from '../components/TableHeaderComponent';
import AttendanceTrackingComponent from '../components/AttendanceTrackingComponent';
import { headCells } from '../config/attendanceConfig';

// Replace degreesData with actual session data
const sessionData = [
  {
    degreeTitle: 'Master of Information Security',
    courses: [
      { startTime: '10:45 AM', endTime: '01:30 PM', courseId: 1, lecturer: 'Dr. Smith', attended: false },
      { startTime: '02:00 PM', endTime: '03:30 PM', courseId: 2, lecturer: 'Prof. Johnson', attended: false },
      // Add more sessions...
    ],
  },
  {
    degreeTitle: 'Master of Computer Science',
    courses: [
      { startTime: '10:45 AM', endTime: '01:30 PM', courseId: 3, lecturer: 'Dr. Smith', attended: false },
      { startTime: '02:00 PM', endTime: '03:30 PM', courseId: 4, lecturer: 'Prof. Johnson', attended: false },
    ],
  },
  {
    degreeTitle: 'Master of Information Technology',
    courses: [
      { startTime: '10:45 AM', endTime: '01:30 PM', courseId: 5, lecturer: 'Dr. Smith', attended: false },
      { startTime: '02:00 PM', endTime: '03:30 PM', courseId: 6, lecturer: 'Prof. Johnson', attended: false },
    ],
  },
  {
    degreeTitle: 'Master of Business Analytics',
    courses: [
      { startTime: '10:45 AM', endTime: '01:30 PM', courseId: 7, lecturer: 'Dr. Smith', attended: false },
      { startTime: '02:00 PM', endTime: '03:30 PM', courseId: 8, lecturer: 'Prof. Johnson', attended: false },
    ],
  },
];

const Layout1 = ({ degree }) => {
  const columns = ['TIME', 'COURSE', 'LECTURER', 'STATUS'];

  // Extract session data from the degree object
  const data = degree.courses.map(session => ({
    TIME: `${session.startTime} - ${session.endTime}`,
    COURSE: session.courseId, // Display courseID instead of courseName
    LECTURER: session.lecturer,
    STATUS: session.attended ? 1 : 0,
  }));

  const done = 0; //might want to adjust this value based on your logic
  const btn = 0; // might want to adjust this value based on your logic

  return (
    <div>
      <TableHeaderComponent left={degree.degreeTitle} right={'Sat 12th Aug, 2023'} />
      <AttendanceTrackingComponent columns={columns} data={data} done={done} btn={btn} />
    </div>
  );
};

const AttendanceTrackingLayout = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2.5}></Grid>
        <Grid container xs={9.3} sx={{
          display: 'grid',
          gridTemplateRows: '16.5% auto 10%',
          height: '100vh',
        }}>
          <Grid item>
            <HeaderComponent />
          </Grid>
          <Grid item>
            {/* Map over your actual session data */}
            {sessionData.map((degree, index) => (
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
