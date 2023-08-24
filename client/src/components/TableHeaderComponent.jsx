import React, { Component } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { width } from '@mui/system';

class TableHeaderComponent extends Component {
    render() {
        const { left, right, addbtn } = this.props;
        return (
            <div style={{
                display: 'flex',
                borderRadius: '7px',
                background: 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%)',
                boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.22)',
                color: '#FFFFFF',
                paddingRight: '20px',
                paddingLeft: '20px',
                width: addbtn ? '97%' : '91.5%',
                marginRight: addbtn ? 'auto' : '3.5rem',
                marginLeft: addbtn? 'auto' : '1rem', 
                position: 'relative',
                zIndex: 1,
                fontSize: addbtn ? '18.72px' : '13px',
                height: addbtn ? '70px' : '60px',
                alignItems: 'center',
            }}>
                <h3 style={{
                    width: '50%',
                    textAlign: 'left'
                }}>{left}</h3>
                {/* if addbtn add aaddcircleIcon else add right text */}
                {addbtn ? 
                    <AddCircleIcon sx={{
                        marginLeft: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        color: '#FFFFFF',
                        fontSize: '30px',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
                        cursor: 'pointer',
                        transition: '0.3s',
                        ":hover": {
                            transform: 'rotate(90deg)'
                        }
                    }} /> 
                    : 
                    <h3 style={{
                        width: '50%',
                        textAlign: 'right'
                    }}>{right}</h3>
                }
            </div>
        );
    }
}

export default TableHeaderComponent;