import React, { Component } from 'react';

class footerComponent extends Component {
    render() {
        return (
            <div style={{
                fontSize: '12px',
                color: '#898989',
                borderTop: '1px solid #DEDEDE',
                bottom: '0',
            }}>
                <p>&copy; 2023, All rights reserved by University of Colombo School of Computing<br />
                No: 35, Reid Avenue, Colombo 7, Sri Lanka.</p>
            </div>
        );
    }
}

export default footerComponent;