import React, { Component } from 'react';

class TableHeaderComponent extends Component {
    render() {
        const { left, right } = this.props;
        return (
            <div style={{
                display: 'flex',
                borderRadius: '7px',
                background: 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%)',
                boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.22)',
                color: '#FFFFFF',
                paddingRight: '11px',
                paddingLeft: '20px',
                width: '91.5%',
                marginLeft: 'auto',
                marginRight: '3.5rem',
                position: 'relative',
                zIndex: 1,
            }}>
                <h3>{left}</h3>
                <h3 style={{
                    width: '80%',
                    textAlign: 'right'
                }}>{right}</h3>
            </div>
        );
    }
}

export default TableHeaderComponent;