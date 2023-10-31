import React from 'react';
import { Box, Grid, Paper } from '@mui/material/';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import TableHeaderComponent from '../components/TableHeaderComponent';
import useAxiosMethods from '../hooks/useAxiosMethods';
import { useEffect, useState } from "react";
import NavBarComponent from '../components/NavbarComponent';
import GeneralDashboardTable from '../components/GeneralDashboardTable'; // Import the GeneralDashboardTable component


const Layout1 = ({ degree }) => {

  const columns = ['DATE', 'TIME',  'COURSE', 'LECTURER', 'STATUS'];
  console.log(degree);
  // Extract session data from the degree object
  const data = degree.map(session => ({
    DATE: session.date,
    TIME: `${session.startTime} - ${session.endTime}`,
    COURSE: session.courseId.courseName, // Display courseID instead of courseName
    LECTURER: `${session.tsId.firstname} ${session.tsId.lastname}`,
    STATUS: session.status === "Pending" ? 0 : 1,
  }));

  return (
    <div>
      <TableHeaderComponent left={degree[0].courseId.programId.name}/>
      <Paper sx={{ borderRadius: '7px', background: '#FFF', boxShadow: '0px 13px 20px -7px rgba(0, 0, 0, 0.15)', marginTop: 2 }}>
            {/* Use the GeneralDashboardTable component */}
            <GeneralDashboardTable columns={columns} data={data} />
        </Paper>
    </div>
  );
};

const AttendanceTrackingLayout = () => {

  const attendance_url = `attendance/getAttendance`
  const [sessions, setSessions] = useState([]);
  const { get } = useAxiosMethods();
  useEffect(() => {
      // Call the get method to fetch user data
      get(attendance_url, setSessions);
  }, []);

  // Group sessions by programId
  const sessionsByProgram = {};
  sessions.forEach(session => {
    const programId = session.courseId.programId.name; // Assuming programId contains a 'name' property
    if (!sessionsByProgram[programId]) {
      sessionsByProgram[programId] = [];
    }
    sessionsByProgram[programId].push(session);
    console.log(sessionsByProgram);
  });

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <NavBarComponent />
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
            {/* Map over programIds and create Layout1 components for each program */
            Object.keys(sessionsByProgram).map(programId => (
              <Layout1 key={programId} degree={sessionsByProgram[programId]} />
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
