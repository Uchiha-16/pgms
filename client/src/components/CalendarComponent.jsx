import * as React from 'react';
import { DateAdapter, LocalizationProvider, DateRangePicker } from '@mui/lab';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import Day from '@mui/lab/Day';
import { styled } from '@mui/system';
import dayjs from 'dayjs';

const DemoContainer = styled('div')({
    '& .MuiCalendarPicker-root': {
        width: 'auto',
    },
});

const DemoItem = styled('div')({
    '& .MuiTypography-caption': {
        fontSize: '13px',
    },
    '& .MuiButtonBase-root': {
        fontSize: '11px',
        width: '30px',
        height: '30px',
        fontFamily: 'Open Sans',
        fontWeight: '500',
    },
    '& .MuiIconButton-root': {
        fontSize: '20px',
    },
    '& .Mui-selected': {
        backgroundColor: '#344767',
        '&:hover': {
            backgroundColor: '#42424A',
        },
    },
    '& .MuiTypography-root': {
        width: '30px',
        height: '30px',
        fontWeight: 'bold',
        color: '#8E8C9A',
    },
    '& .MuiDay-root': {
        width: '30px',
        height: '30px',
    },
    '& .MuiCalendarPicker-daysHeader': {
        paddingLeft: '42px',
        paddingRight: '32px',
    },
    '& .MuiDay-root[data-mui-test="23"]': {
        backgroundColor: 'yellow', // Change this color as needed
    },
});

export default function DateCalendarFormProps() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer>
                <DemoItem>
                    <DateAdapter date={dayjs()}>
                        {(adapterProps) => (
                            <DateRangePicker
                                {...adapterProps}
                                open
                                renderInput={() => <div />}
                                calendars={1}
                                view={CalendarPickerView}
                                DayComponent={Day}
                            />
                        )}
                    </DateAdapter>
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
