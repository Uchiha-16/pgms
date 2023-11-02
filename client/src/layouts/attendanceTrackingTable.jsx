import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material/';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import TableHeaderComponent from '../components/TableHeaderComponent';
import AttendanceTrackingComponent from '../components/AttendanceTrackingTableComponent';
import { headCells } from '../config/attendanceConfig';
import NavbarComponent from '../components/NavbarComponent';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';

const Layout = ({ degreeName, rows }) => (
  <>
    <TableHeaderComponent left={`Master of ${degreeName}`} right={'Sat 12th Aug, 2023'} />
    <AttendanceTrackingComponent rows={rows} headCells={headCells} />
  </>
);

const createData = (TIME, COURSE, LECTURER, STAFFCONFIRMATION, PCCONFIRMATION, STATUS, ACTION, SESSIONID) => ({
  TIME,
  COURSE,
  LECTURER,
  STAFFCONFIRMATION,
  PCCONFIRMATION,
  STATUS,
  ACTION, 
  SESSIONID
});

const AttendaceTrackingTable = () => {

  const { auth } = useAuth();
  // Modify dummyRows for the relevant degree program (e.g., Information Technology)
  const [attendanceData, setAttendanceData] = useState([]);
  var programCoordinatorRole; 
  if(auth.role == "PCMCS"){
    programCoordinatorRole = "Computer Science";
  } else if (auth.role == "PCMIT"){
    programCoordinatorRole = "Information Technology";
  } else if (auth.role == "PCMIS"){
    programCoordinatorRole = "Information Systems";
  } else {
    programCoordinatorRole = "Buisness Analytics";
  }
  

  //get the prorgamID by the userrole
  const programID = auth.role.substring(2, 5);
  console.log(programID);
  var ID;
  // Fetch data from backend API and populate attendanceData state variable with it
  if(programID === "MCS"){
    ID = 1;
  } else if(programID === "MIT") {
    ID = 2;
  } else if(programID === "MIS") {
    ID = 3; 
  } else {
    ID = 4;
  }
  console.log(ID);
  useEffect(() => {
    // Make an Axios request to fetch attendance data for the program coordinator
    axios.get(`/attendance/getCourseAttendance/${ID}`) // Replace with your actual API endpoint
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          const transformedData = response.data.map((item) => {
            return createData(
              `${item.startTime} ${item.endTime}` ,
              item.courseId.courseNo,
              `${item.tsId.firstname} ${item.tsId.lastname}`,
              item.staffID == null ? "PENDING" : "MARKED",
              item.pcID == null ? "PENDING" : "MARKED",
              item.status == "Pending" ? 0 : 1,
              'Inform',
              item.sessionId
            );
          });
          setAttendanceData(transformedData);
        }
      })
      .catch((error) => {
        console.error('Error fetching attendance data:', error);
      });
    },  []);
  // Determine the degree program for the Program Coordinator
  // fetch this information from backend or based on user authentication
  // Example program name
    console.log(attendanceData);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <NavbarComponent />
        </Grid>
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
            <Layout degreeName={programCoordinatorRole} rows={attendanceData} />
          </Grid>
          <Grid item>
            <FooterComponent />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );

};

export default AttendaceTrackingTable;