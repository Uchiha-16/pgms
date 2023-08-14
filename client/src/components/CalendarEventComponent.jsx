import React, { Component } from 'react';
import Button from '@mui/material/Button';

class CalendarEventComponent extends Component {
    render() {

        const { date, time, description } = this.props;

        return (
            <div style={{
                display: 'grid',
                padding: '20px',
                borderRadius: '5px',
                background: 'rgba(123, 128, 154, 0.21)',
                marginTop: '30px',
                marginBottom: '30px',
                height: '5.2rem',
            }}  >
                <p style={{
                    color: '#6E6E6E',
                    fontFamily: 'Inter',
                    fontSize: '9px',
                    textAlign: 'left',
                    margin: 0,
                }}>{date}</p>

                <p style={{
                    color: '#000',
                    fontFamily: 'Inter',
                    fontSize: '11px',
                    textAlign: 'left',
                    margin: 0,
                }}>{time} - {description}</p>

                <Button sx={{
                    borderRadius: '24px',
                    background: '#7B809A',
                    color: '#FFF',
                    fontFamily: 'Inter',
                    fontSize: '11px',
                    fontWeight: '700',
                    width: '100px',
                    height: '24px',
                    position: 'relative',
                    top: '0.2rem',
                    right: '-6rem',
                    transition: '0.3s',
                    ":hover": {
                        background: '#42424A',
                    }
                }}>View</Button>
            </div>
        );
    }
}

export default CalendarEventComponent;