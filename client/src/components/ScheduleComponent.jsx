import * as React from 'react';
import { Paper, Box, TableContainer } from '@mui/material';
import { green, lightBlue } from '@mui/material/colors';
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

const priorityData = [
    { text: 'MCS', id: 1, color: lightBlue },
    { text: 'MIS', id: 2, color: green },
    { text: 'MIT', id: 3, color: '#dda0dd' },
    { text: 'MBA', id: 4, color: '#FFA500' },

];

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


export default class Schedule extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments.filter(appointment => appointment.priorityId < 3),
            resources: [{
                fieldName: 'priorityId',
                title: 'Priority',
                instances: priorityData,
            }],
            grouping: [{
                resourceName: 'priorityId',
            }],
            groupByDate: isWeekOrMonthView,
            isGroupByDate: true,
        };

        this.commitChanges = this.commitChanges.bind(this);
        this.onGroupOrderChange = () => {
            const { isGroupByDate } = this.state;
            this.setState({
                isGroupByDate: !isGroupByDate,
                groupByDate: isGroupByDate ? undefined : isWeekOrMonthView,
            });
        };
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
            data, resources, grouping, groupByDate,
        } = this.state;

        return (
                <Box>
                    <Paper
                        sx={{
                            background: "transparent",
                            boxShadow: "none",
                            height: "auto",
                            zIndex: 0,
                        }}
                    >
                        <TableContainer
                            sx={{
                                backgroundColor: "#FFFFFF",
                                position: "relative",
                                top: "-2rem",
                                zIndex: 0,
                                paddingTop: "78px",
                                paddingBottom: 3,
                                borderRadius: "5px",
                            }}
                        >

                            <Scheduler
                                data={data}
                                height={'auto'}
                            >
                                <ViewState
                                    defaultCurrentDate="2023-10-28"
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
                                    endDayHour={17}
                                    excludedDays={[1, 2, 3, 4, 5]}  // Excludes Mon-Fri
                                />

                                <Appointments />
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
