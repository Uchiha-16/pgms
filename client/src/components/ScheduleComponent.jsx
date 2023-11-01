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
import axios from '../api/axios';
// import { data as appointments } from '../config/timetableData';

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
    
    componentDidMount() {
        // Make an Axios GET request within componentDidMount
        axios.get('/sessions/get')
          .then((response) => {
            const fetchedData = response.data;
            console.log(fetchedData);

            const appointments = fetchedData.map((item) => {
                return {
                    title: item.courseId.courseNo,
                    priorityId: item.courseId.programId.name,
                    semester: item.courseId.semester,
                    startDate: item.startTime,
                    endDate: item.endTime,
                    hallName: item.hallName,
                    lecturerName: `${item.tsId.firstname} ${item.tsId.lastname}`,
                    id: item.sessionId,
                }
            })
            this.setState({ data: appointments });
            console.log(appointments);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });

          //Map the fields to appointment const

      }

    constructor(props) {
        super(props);

        // Determine the selected day based on today's date
        let selectedDay = 'Saturday'
        if (currentDayOfWeek === 0) {
            selectedDay = 'Sunday';
        }

        this.state = {
            resources: [
                {
                    fieldName: 'semester',
                    title: 'Semester',
                    instances: [
                        { text: 'Semester 4', id: 1 },
                        { text: 'Semester 2', id: 2 },
                    ],
                },
                {
                fieldName: 'priorityId',
                title: 'Priority',
                instances: [
                    { text: 'MIT', id: 'MIT', color: lightBlue },
                    { text: 'MCS', id: 'MCS', color: green },
                    { text: 'MBA', id: 'MBA', color: '#dda0dd' },
                    { text: 'MIS', id: 'MIS', color: '#FFB939' },
                ],
            }],
            grouping: [
                { resourceName: 'semester' },
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
        const currentDate = new Date();

        if (day === 'Saturday') {
            // Calculate the upcoming Saturday
            const currentDayOfWeek = currentDate.getDay();
            const daysUntilSaturday = 6 - currentDayOfWeek;
            const startDay = new Date(currentDate);
            startDay.setDate(currentDate.getDate() + daysUntilSaturday);
            const endDay = new Date(startDay);
            endDay.setDate(startDay.getDate() + 1);

            this.setState({
                selectedDay: day,
                weekViewStartDate: startDay,
                weekViewEndDate: endDay,
            });
        } else if (day === 'Sunday') {
            // Calculate the upcoming Sunday
            const currentDayOfWeek = currentDate.getDay();
            const daysUntilSunday = currentDayOfWeek === 0 ? 7 : 7 - currentDayOfWeek;
            const startDay = new Date(currentDate);
            startDay.setDate(currentDate.getDate() + daysUntilSunday);
            const endDay = new Date(startDay);
            endDay.setDate(startDay.getDate() + 1);

            this.setState({
                selectedDay: day,
                weekViewStartDate: startDay,
                weekViewEndDate: endDay,
            });
        }
    }


    commitChanges({ added, changed, deleted }) {
        console.log('Added:', added);
        console.log('Changed:', changed);
        console.log('Deleted:', deleted);
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

    handleAppointmentContextMenu = (e, appointment) => {
        e.preventDefault(); // Prevent the default browser context menu
        const confirmation = window.confirm('Are you sure you want to delete this appointment?');
        if (confirmation) {
            // Delete the appointment here, you can use your commitChanges or other logic
            this.commitChanges({ deleted: appointment.id });
        }
    };

    render() {
        const {
            data, resources, grouping, groupByDate, selectedDay, isGroupByDate, weekViewStartDate, weekViewEndDate,
        } = this.state;

        // Define a variable to store the excluded days based on the selectedDay
        let excludedDays = [];
        if (selectedDay === 'Saturday') {
            excludedDays = [0, 1, 2, 3, 4, 5]; // Exclude all days except Saturday
        } else if (selectedDay === 'Sunday') {
            // Calculate the following Sunday
            excludedDays = [1, 2, 3, 4, 5, 6];
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
                            onAppointmentContextMenu={(e) => this.openDeleteConfirmation(e.appointmentData)}
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
                                startDay={weekViewStartDate}
                                endDay={weekViewEndDate}
                                excludedDays={excludedDays}
                                // intervalCount={1}
                            />

                            <Appointments
                                appointmentContentComponent={({ data }) => (
                                    <div
                                        onContextMenu={(e) => this.handleAppointmentContextMenu(e, data)}
                                    >
                                        <div style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}><br />
                                            <div style={{ fontSize: '14px' }}>{data.title}</div>
                                            <div style={{ color: '#55596F' }}>{data.hallName}</div>
                                            <div style={{ color: '#3E4152' }}>{data.lecturerName}</div>
                                        </div>
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
