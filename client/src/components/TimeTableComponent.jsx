import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TimeTableComponent = () => {
  const [alignment, setAlignment] = useState('Saturday');
  const [showTimetable, setShowTimetable] = useState(true);

  const handleChange = (event, newAlignment) => {
    if (newAlignment) {
      setShowTimetable(false);
      setTimeout(() => {
        setAlignment(newAlignment);
        setShowTimetable(true);
      }, 300); // Adjust the delay time for the animation
    }
  };

  const timeSlots = [
    '8:30 AM - 10:30 AM',
    '10:45 AM - 12:45 PM',
    '1:30 PM - 3:30 PM',
    '3:45 PM - 5:45 PM',
  ];

  const semesters = ['Semester 3 - 2020', 'Semester 1 - 2022'];

  const degrees = ['MIT', 'MCS', 'MBA', 'MIS'];

  const generateTableCell = (data) => (
    <TableCell align="center">
      <div style={{ fontSize: '12px', fontFamily: 'Roboto, sans-serif' }}>
        {data.subject}
      </div>
      <div
        style={{
          fontSize: '10px',
          fontWeight: '800',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        {data.lecturer}
      </div>
      <div
        style={{
          fontSize: '10px',
          fontFamily: 'Roboto Light, sans-serif',
          fontStyle: 'italic',
        }}
      >
        {data.hall}
      </div>
    </TableCell>
  );

  const tableData = timeSlots.map((timeSlot) => ({
    timeSlot,
    semesters: semesters.map((semester) =>
      degrees.map((degree) => ({
        subject: `${degree}101`,
        lecturer: `Prof ${degree}`,
        hall: `Hall ${degree}`,
      }))
    ),
  }));

  return (
    <Box boxShadow={5} padding={2}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
          transition: 'margin 0.3s', // Add CSS transition for smoother animation
        }}
      >
        <div style={{ flex: 1 }}></div>
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          <ToggleButton
            value="Saturday"
            sx={{
              border: '1px solid #C9D1D8',
              fontSize: '10px',
              borderRadius: '20px',
            }}
          >
            Sat
          </ToggleButton>
          <ToggleButton
            value="Sunday"
            sx={{
              border: '1px solid #C9D1D8',
              fontSize: '10px',
              borderRadius: '20px',
            }}
          >
            Sun
          </ToggleButton>
          <ToggleButton
            sx={{
              border: '1px solid #C9D1D8',
              fontSize: '10px',
              borderRadius: '20px',
            }}
          >
            <AddCircleIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div
        style={{
          opacity: showTimetable ? 1 : 0, // Fade in/out the table with opacity
          transition: 'opacity 0.3s', // Add CSS transition for smoother fade
        }}
      >
        {showTimetable && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      width: '10%',
                      borderRight: '1px solid black',
                      background: 'rgba(255, 142, 0, 0.31)',
                    }}
                  >
                    Time
                  </TableCell>
                  {semesters.map((semester, semesterIndex) => (
                    <TableCell
                      key={semesterIndex}
                      colSpan={degrees.length}
                      align="center"
                      style={{
                        width: `${90 / (semesters.length * degrees.length)}%`,
                        borderRight: '1px solid black',
                        background: 'rgba(67, 160, 71, 0.51)',
                      }}
                    >
                      {semester}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{
                      borderRight: '1px solid black',
                      background: 'rgba(255, 142, 0, 0.31)',
                    }}
                  ></TableCell>
                  {semesters.map(() =>
                    degrees.map((degree, degreeIndex) => (
                      <TableCell
                        key={degreeIndex}
                        align="center"
                        style={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                          borderRight: '1px solid black',
                          background: 'rgba(73, 163, 241, 0.46)',
                        }}
                      >
                        <div style={{ marginBottom: '5px' }}>{degree}</div>
                      </TableCell>
                    ))
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell
                      style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        borderRight: '1px solid black',
                        background: 'rgba(255, 142, 0, 0.31)',
                      }}
                    >
                      {row.timeSlot}
                    </TableCell>
                    {row.semesters.map((semesterData) =>
                      semesterData.map((data) => (
                        <React.Fragment
                          key={`${data.subject}-${data.lecturer}`}
                        >
                          {generateTableCell(data)}
                        </React.Fragment>
                      ))
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </Box>
  );
};

export default TimeTableComponent;
