import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TableHeader = () => {
    return (
        <div style={{
            display: 'flex',
            borderRadius: '7px',
            background: 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%)',
            boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.22)',
            color: '#FFFFFF',
            paddingRight: '20px',
            paddingLeft: '20px',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'absolute',
            left: 355,
            zIndex: 1,
        }}>
            <h3>Nominations</h3>
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
        </div>
    );
};

export default TableHeader;
