import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const TimeTableComponent = () => {
  // Dummy data
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
      <div>{data.subject}</div>
      <div>{data.lecturer}</div>
      <div>{data.hall}</div>
    </TableCell>
  );

  // Dummy data for each cell
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
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              {semesters.map((semester, semesterIndex) => (
                <TableCell key={semesterIndex} colSpan={degrees.length} align="center">
                  {semester}
                  <br />
                  <hr style={{ border: '1px solid black' }} />
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              {semesters.map((semester) =>
                degrees.map((degree, degreeIndex) => (
                  <TableCell key={degreeIndex} align="center">
                    {degree}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{row.timeSlot}</TableCell>
                {row.semesters.map((semesterData, semesterIndex) =>
                  semesterData.map((data, degreeIndex) => (
                    <React.Fragment key={degreeIndex}>
                      {generateTableCell(data)}
                    </React.Fragment>
                  ))
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TimeTableComponent;
