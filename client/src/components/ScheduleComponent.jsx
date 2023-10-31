import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Paper,
    Box,
    TableContainer,
    ToggleButton,
    ToggleButtonGroup,
    Checkbox,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { green, lightBlue } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
    ViewState, EditingState, GroupingState, IntegratedGrouping, IntegratedEditing,
} from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Resources,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    DragDropProvider,
    GroupingPanel,
    WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';
import { data as appointments } from '../config/timetableData';

const isWeekOrMonthView = viewName => viewName === 'Week';


const PREFIX = 'ScheduleComponent';
// #FOLD_BLOCK
const classes = {
    formControlLabel: `${PREFIX}-formControlLabel`,
    text: `${PREFIX}-text`,
};
// #FOLD_BLOCK
const StyledFormControlLabel = styled(FormControlLabel)(({
    theme: { spacing, palette, typography },
}) => ({
    [`&.${classes.formControlLabel}`]: {
        padding: spacing(2),
        paddingLeft: spacing(10),
    },
    [`&.${classes.text}`]: {
        ...typography.caption,
        color: palette.text.secondary,
        fontWeight: 'bold',
        fontSize: '1rem',
    },
}));

const GroupOrderSwitcher = (({ isGroupByDate, onChange }) => (
    <StyledFormControlLabel
        control={
            <Checkbox checked={isGroupByDate} onChange={onChange} color="primary" style={{display:'none'}}/>
        }
        className={classes.formControlLabel}
        classes={{ label: classes.text }}
    />
));



// Get the current date
const currentDate = new Date();

// Calculate the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const currentDayOfWeek = currentDate.getDay();

// Calculate the date for the upcoming Saturday
const saturday = new Date(currentDate);
saturday.setDate(currentDate.getDate() + (6 - currentDayOfWeek));

// Calculate the date for the following Sunday
const sunday = new Date(saturday);
sunday.setDate(saturday.getDate() + 1);

// Format the dates as day numbers
const saturdayDate = saturday.getDate();
const sundayDate = sunday.getDate();

console.log("Saturday:", saturdayDate);
console.log("Sunday:", sundayDate);

export default class ScheduleComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        // Determine the selected day based on today's date
        let selectedDay = 'Saturday'
        if (currentDayOfWeek === 0) {
            selectedDay = 'Sunday';
        }

        this.state = {
            data: appointments,
            resources: [{
                fieldName: 'priorityId',
                title: 'Priority',
                instances: [
                    { text: 'MIT', id: 'MIT', color: lightBlue },
                    { text: 'MCS', id: 'MCS', color: green },
                    { text: 'MBA', id: 'MBA', color: '#dda0dd' },
                    { text: 'MIS', id: 'MIS', color: '#FFB939' },
                ],
            },
                {
                    fieldName: 'semester',
                    title: 'Semester',
                    instances: [
                        { text: 'Semester 4', id: 1 },
                        { text: 'Semester 2', id: 2 },
                    ],
                }
            ],
            grouping: [
                // { resourceName: 'semester' },
                { resourceName: 'priorityId' },
            ],
            groupByDate: isWeekOrMonthView,
            isGroupByDate: true,
            selectedDay: selectedDay,
        };

        // Bind event handlers
        this.commitChanges = this.commitChanges.bind(this);
        this.onGroupOrderChange = () => {
            const { isGroupByDate } = this.state;
            this.setState({
                isGroupByDate: !isGroupByDate,
                groupByDate: isGroupByDate ? undefined : isWeekOrMonthView,
            });
        };
        this.toggleSelectedDay = this.toggleSelectedDay.bind(this);

    }

    // Add a method to toggle the selected day
    toggleSelectedDay(day) {
        let firstDayOfWeek = 6; // Saturday
        if (day === 'Sunday') {
            // Calculate the upcoming Sunday
            const currentDayOfWeek = currentDate.getDay();
            firstDayOfWeek = currentDayOfWeek === 0 ? 7 : 7 - currentDayOfWeek;
        }

        this.setState({ selectedDay: day, firstDayOfWeek });
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const {
            data, resources, grouping, groupByDate, selectedDay, isGroupByDate,
        } = this.state;

        // Define a variable to store the excluded days based on the selectedDay
        let excludedDays = [];
        let saturdaySelected = false;
        if (selectedDay === 'Saturday') {
            excludedDays = [0, 1, 2, 3, 4, 5]; // Exclude all days except Saturday
            saturdaySelected = true;
        } else if (selectedDay === 'Sunday') {
            // Calculate the following Sunday
            excludedDays = [1, 2, 3, 4, 5, 6];
            saturdaySelected = false;
        }


        return (
            <Box>
                <GroupOrderSwitcher isGroupByDate={isGroupByDate} onChange={this.onGroupOrderChange} />
                <Paper
                    sx={{
                        background: "transparent",
                        boxShadow: "none",
                    }}
                >
                    <TableContainer
                        sx={{
                            backgroundColor: "#FFFFFF",
                            position: "relative",
                            top: "-4rem",
                            paddingTop: "78px",
                            paddingBottom: 3,
                            borderRadius: "5px",
                            "& .MainLayout-stickyElement": {
                                borderTop: '1px solid #C9D1D8',
                            }
                        }}
                    >
                        {/* Toggle button */}
                        <div style={{
                            flex: 1,
                            float: 'right',
                            marginRight: '1.5rem',
                            marginBottom: '2rem',
                        }}>
                            <ToggleButtonGroup sx={{
                                height: '10px',
                            }}

                            >
                                <ToggleButton
                                    value="Saturday"
                                    sx={{
                                        border: '1px solid #C9D1D8',
                                        fontSize: '10px',
                                        borderRadius: '20px',
                                        padding: '1rem',
                                        backgroundColor: selectedDay === 'Saturday' ? '#DEE2E6' : 'white',
                                    }}
                                    onClick={() => this.toggleSelectedDay('Saturday')}
                                >
                                    Sat
                                </ToggleButton>
                                <ToggleButton
                                    value="Sunday"
                                    sx={{
                                        border: '1px solid #C9D1D8',
                                        fontSize: '10px',
                                        borderRadius: '20px',
                                        padding: '1rem',
                                        backgroundColor: selectedDay === 'Sunday' ? '#DEE2E6' : 'white',
                                    }}
                                    onClick={() => this.toggleSelectedDay('Sunday')}
                                >
                                    Sun
                                </ToggleButton>
                                <ToggleButton
                                    sx={{
                                        border: '1px solid #C9D1D8',
                                        fontSize: '9px',
                                        borderRadius: '20px',
                                        padding: '1rem',
                                    }}
                                >
                                    <AddCircleIcon fontSize="small" />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <Scheduler
                            data={data}
                            height={'auto'}
                        >
                            <ViewState
                                defaultCurrentDate="2023-10-30"
                            />
                            <EditingState
                                onCommitChanges={this.commitChanges}
                            />
                            <GroupingState
                                grouping={grouping}
                                groupByDate={groupByDate}
                            />


                            <WeekView
                                startDayHour={8}
                                endDayHour={18}
                                excludedDays={excludedDays}
                                intervalCount={1} // Display one day in WeekView
                            //Display only Saturday or next week Sunday
                            // startDay={saturdaySelected ? 0 : 1} // Display Saturday or Sunday
                            // endDay={saturdaySelected ? 6 : 0} // Display Saturday or Sunday
                            />

                            <Appointments
                                appointmentContentComponent={({ data }) => (
                                    <div style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}><br />
                                        <div style={{ fontSize: '14px' }}>{data.title}</div>
                                        <div style={{ color: '#55596F' }}>{data.hallName}</div>
                                        <div style={{ color: '#3E4152' }}>{data.lecturerName}</div>
                                    </div>
                                )}
                            />
                            <Resources
                                data={resources}
                                mainResourceName="priorityId"
                            />
                            <IntegratedGrouping />
                            <IntegratedEditing />

                            <AppointmentTooltip />
                            <AppointmentForm />

                            <GroupingPanel />
                            <DragDropProvider />
                        </Scheduler>

                    </TableContainer>
                </Paper>
            </Box>
        )
    }
}
