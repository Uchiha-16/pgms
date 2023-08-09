import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarFormProps() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar']} sx={{
                '& .MuiDateCalendar-root': {
                    width: 'auto',
                }
            }}>
                <DemoItem>
                    <DateCalendar defaultValue={dayjs()} readOnly sx={{
                        '& .MuiPickersCalendarHeader-labelContainer': {
                            fontSize: '13px',
                        },
                        '& .MuiButtonBase-root': {
                            fontSize: '11px',
                            width: '30px',
                            height: '30px',
                            fontFamily: 'Open Sans',
                            fontWeight: '500',
                        },
                        '& .MuiPickersArrowSwitcher-button': {
                            fontSize: '20px',
                        },
                        '& .css-1jsy6pn-MuiButtonBase-root-MuiPickersDay-root.Mui-selected': {
                            backgroundColor: '#344767',
                        },
                        '& .css-1jsy6pn-MuiButtonBase-root-MuiPickersDay-root.Mui-selected:hover': {
                            backgroundColor: '#42424A',
                        },
                        '& .MuiTypography-root': {
                            width: '30px',
                            height: '30px',
                            fontWeight: 'bold',
                            color: '#8E8C9A',
                        },
                        '& .MuiPickersDay-root': {
                            width: '30px',
                            height: '30px',
                        },
                        '& .MuiPickersCalendarHeader-root': {
                            paddingLeft: '42px',
                            paddingRight: '32px'
                        }
                    }}/>
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}