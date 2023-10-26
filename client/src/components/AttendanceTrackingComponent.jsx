import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableRow, Paper, Checkbox } from '@mui/material';
import GeneralDashboardTable from './GeneralDashboardTable'; // Import the GeneralDashboardTable component

const AttendanceTrackingComponent = ({ degree }) => {
    // Use the same lectures data structure as before
    const [lectures, setLectures] = useState([
        { time: '10:45 AM', course: 'Modelling and Simulation of Data', lecturer: 'Dr. Smith', attended: false },
        { time: '01:30 PM', course: 'Individual Research Project', lecturer: 'Prof. Johnson', attended: false },
        // Add more lectures...
    ]);

    const markAttendance = (index) => {
        const updatedLectures = [...lectures];
        updatedLectures[index].attended = true;
        setLectures(updatedLectures);
    };

    const columns = ['TIME', 'COURSE', 'LECTURER', 'STATUS']; // Define the columns for the table
    const data = lectures.map(lecture => ({ // Map lectures data to the required format
        TIME: lecture.time,
        COURSE: lecture.course,
        LECTURER: lecture.lecturer,
        STATUS: lecture.attended ? 1 : 0,
    }));
    const done = 0; // You might want to adjust this value based on your logic
    const btn = 0; // You might want to adjust this value based on your logic

    return (
        <Paper sx={{ borderRadius: '7px', background: '#FFF', boxShadow: '0px 13px 20px -7px rgba(0, 0, 0, 0.15)', marginTop: 2 }}>
            {/* Use the GeneralDashboardTable component */}
            <GeneralDashboardTable columns={columns} data={data} done={done} btn={btn} />
        </Paper>
    );
};

export default AttendanceTrackingComponent;