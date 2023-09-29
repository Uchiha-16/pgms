import React, { Component } from 'react';
import { width } from '@mui/system';
import Popup from './PopupComponent';



class TableHeaderComponent extends Component {
    render() {
        const { left, right,center, addbtn } = this.props;
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
                    <Popup/> 
                    : 
                    <h3 style={{
                        width: '100%',
                        textAlign: 'center'
                    }}>{center}</h3>
                }
                    <h3 style={{
                        width: '50%',
                        textAlign: 'right'
                    }}>{right}</h3>
                
                 
            </div>
        );
    }
}

export default TableHeaderComponent;