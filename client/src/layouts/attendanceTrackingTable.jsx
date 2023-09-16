import React, { Component } from 'react';
import { Box, Grid } from '@mui/material/';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import TableHeaderComponent from '../components/TableHeaderComponent';
import AttendanceTrackingComponent from '../components/AttendanceTrackingTableComponent';
import { headCells } from '../config/attendanceConfig';

const Layout = ({ degreeName, rows }) => (
  <>
    <TableHeaderComponent left={`Master of ${degreeName}`} right={'Sat 12th Aug, 2023'} />
    <AttendanceTrackingComponent rows={rows} headCells={headCells} />
  </>
);

class AttendaceTrackingTable extends Component {
  createData(TIME, COURSE, LECTURER, LECTURERCONFRIMATION, STAFFCONFIRMATION, STATUS, ACTION) {
    return {
      TIME,
      COURSE,
      LECTURER,
      LECTURERCONFRIMATION,
      STAFFCONFIRMATION,
      STATUS,
      ACTION
    };
  }

  render() {
    // Modify dummyRows for the relevant degree program (e.g., Information Technology)
    const dummyRows = [
      this.createData('10.45 AM - 12.45 PM', 'Modelling and Simulation of Data', 'Dr. Smith', 'MARKED', 'PENDING', 1, 'Inform'),
      this.createData('12.45 AM - 2.45 PM', 'Individual Research Project', 'Prof. Johnson', 'PENDING', 'PENDING', 0, 'Inform'),
      // Add more rows...
    ];

    // Determine the degree program for the Program Coordinator
    // fetch this information from  backend or based on user authentication
    const programCoordinatorRole = 'Information Technology'; // Example program name

    return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2.5}></Grid>
          <Grid container xs={9.3} sx={{ 
            display: 'grid', 
            gridTemplateRows: '16.5% auto 10%',
            height: '100vh', 
            marginTop: '55px',
          }}>
            <Grid item>
              <HeaderComponent />
            </Grid>
            <Grid item>
              {/* Display data for the relevant degree program based on the Program Coordinator's role */}
              {programCoordinatorRole === 'Information Technology' && (
                <Layout degreeName="Information Technology" rows={dummyRows} />
              )}
              
              {programCoordinatorRole === 'Information Security' && (
                <Layout degreeName="Information Security" rows={dummyRows} />
              )}
              
              {programCoordinatorRole === 'Computer Science' && (
                <Layout degreeName="Computer Science" rows={dummyRows} />
              )}
              
              {programCoordinatorRole === 'Business Analytics' && (
                <Layout degreeName="Business Analytics" rows={dummyRows} />
              )}
            </Grid>
            <Grid item>
              <FooterComponent />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default AttendaceTrackingTable;
