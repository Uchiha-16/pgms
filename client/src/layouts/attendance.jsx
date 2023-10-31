import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import { Box, Grid } from '@mui/material/';
import AttendanceTable from '../components/AttendanceTable';  // Import the AttendanceTable component
import TableHeader from '../components/TableHeader';

class addUser extends Component {
    render() {
        const columns1 = ['REQUEST', 'NAME', 'STATUS', 'DATE', 'ACTION'];
        const data1 = [
            {
                REQUEST: 'Application for MCS 2203 Lecturer',
                NAME: 'Dr. Kasun Gunawardhana',
                STATUS: 'Accepted',
                DATE: '2023-10-05',
                ACTION: 'Edit',
            },
            {
                REQUEST: 'Application for MIT 1201 Lecturer',
                NAME: 'Prof. Sarah Johnson',
                STATUS: 'Pending',
                DATE: '2023-09-20',
                ACTION: 'Edit',
            },]

        const columns2 = ['REQUEST', 'NAME', 'STATUS', 'DATE', 'ACTION'];
        const data2 = [
            {
                REQUEST: 'Application for MCS 2203 Lecturer',
                NAME: 'Dr. Kasun Gunawardhana',
                STATUS: 'Accepted',
                DATE: '2023-10-05',
                ACTION: 'Edit',
            },
            {
                REQUEST: 'Application for MIT 1201 Lecturer',
                NAME: 'Prof. Sarah Johnson',
                STATUS: 'Pending',
                DATE: '2023-09-20',
                ACTION: 'Edit',
            },]

        const columns3 = ['REQUEST', 'NAME', 'STATUS', 'DATE', 'ACTION'];
        const data3 = [
            {
                REQUEST: 'Application for MCS 2203 Lecturer',
                NAME: 'Dr. Kasun Gunawardhana',
                STATUS: 'Accepted',
                DATE: '2023-10-05',
                ACTION: 'Edit',
            },
            {
                REQUEST: 'Application for MIT 1201 Lecturer',
                NAME: 'Prof. Sarah Johnson',
                STATUS: 'Pending',
                DATE: '2023-09-20',
                ACTION: 'Edit',
            },]

        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavbarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        <Grid item>
                            {/* Display the AttendanceTable component */}
                            <Grid item xs={8}>
                                <TableHeader />
                                <AttendanceTable columns={columns1} data={data1} />

                                
                            </Grid>
                            <Grid item xs={8}>
                            <TableHeader />

                                <AttendanceTable columns={columns2} data={data2} />
                            </Grid>
                            <Grid item xs={8}>
                            <TableHeader />

                                <AttendanceTable columns={columns3} data={data3} />
                            </Grid>
                        </Grid>
                        <Grid item>
                            {/* Add other content as needed */}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default addUser;
