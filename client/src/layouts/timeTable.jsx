import React, { Component } from 'react';
import ScheduleComponent from '../components/ScheduleComponent';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import TableHeaderComponent from '../components/TableHeaderComponent';
import { Box, Grid } from '@mui/material/';

// Get the current date
const currentDate = new Date();

// Find the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const currentDayOfWeek = currentDate.getDay();

// Calculate the difference between the current day and Monday (1 day)
const daysUntilMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

// Calculate the start date by subtracting the days until Monday from the current date
const startDate = new Date(currentDate);
startDate.setDate(currentDate.getDate() - daysUntilMonday);

// Calculate the end date by adding the remaining days until Sunday (6 days) to the current date
const endDate = new Date(startDate);
endDate.setDate(startDate.getDate() + 6);

// Format the dates as strings (e.g., 'yyyy-mm-dd')
const startDateString = startDate.toISOString().slice(0, 10);
const endDateString = endDate.toISOString().slice(0, 10);

const nbsp = '\u00A0';

// Intake Details
const intakeStartYear = '2022';
const intakeEndYear = '2023';
class TimeTable extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavBarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{
                        display: 'grid',
                        gridTemplateRows: '12.5% auto 10%',
                    }}>
                        {/*============================== Header ==============================*/}
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        <Grid item>
                            {/*============================== Table Header ==============================*/}
                            <TableHeaderComponent 
                                left={`TIMETABLE ${nbsp} : ${nbsp} ${startDateString} ${nbsp} to ${nbsp} ${endDateString}`} 
                                right={`INTAKE ${nbsp} ${intakeStartYear} - ${intakeEndYear}`}
                                addbtn={false} />
                            {/*============================== Schedule ==============================*/}
                            <ScheduleComponent />
                        </Grid>
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

export default TimeTable;
