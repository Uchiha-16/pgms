import React from 'react';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import Button from '@mui/material/Button';

const CustomAppointmentTooltip = ({ appointmentData, onDeleteAppointment }) => {
    const handleDeleteClick = () => {
        onDeleteAppointment(appointmentData.id);
    };

    // Add a conditional check for startDate
    const startDate = appointmentData?.startDate || null;

    return (
        <AppointmentTooltip.Content {...appointmentData}>
            {/* Check startDate before accessing it */}
            {startDate && (
                <div>
                    <p>Start Date: {startDate.toLocaleString()}</p>
                    {/* Your other content here */}
                    <Button variant="contained" color="error" onClick={handleDeleteClick}>
                        Delete
                    </Button>
                </div>
            )}
        </AppointmentTooltip.Content>
    );
};

export default CustomAppointmentTooltip;
