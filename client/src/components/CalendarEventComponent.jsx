import React, { Component } from 'react';

class CalendarEventComponent extends Component {
    render() {
        return (
            <div style={{
                display: 'grid',
                padding: '20px',
                borderRadius: '5px',
                background: 'rgba(123, 128, 154, 0.21)',
                margin: '30px',
            }}  >
                <p style={{
                    color: '#6E6E6E',
                    fontFamily: 'Inter',
                    fontSize: '11px',
                    textAlign: 'left',
                    margin: 0,
                }}>Wednesday, 19 September 2023</p>

                <p style={{
                    color: '#000',
                    fontFamily: 'Inter',
                    fontSize: '13px',
                    textAlign: 'left',
                    margin: 0,
                }}>10.45 AM - Modelling and Simulation of Data Pr...</p>
            </div>
        );
    }
}

export default CalendarEventComponent;