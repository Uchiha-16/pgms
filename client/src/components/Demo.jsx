import * as React from 'react';
import Paper from '@mui/material/Paper';
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

export default class Demo extends React.PureComponent {
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
            (
                <div>
                    <Paper>
                        <Scheduler
                            data={data}
                            height={'auto'}
                        >
                            <ViewState
                                defaultCurrentDate="2023-9-28"
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
                    </Paper>
                </div>
            )
        );
    }
}
