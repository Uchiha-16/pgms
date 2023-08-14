import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { keyframes } from '@mui/system';

const load = keyframes`
  0% { width: 0%; }
  100% { width: ${props => props.percentage}%; }
`;

const ProgressbarComponent = ({ percentage }) => {

    return (
        <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{ 
                width: '90%',
                height: '10px',
                borderRadius: '10px',
                backgroundColor: '#E0E0E0',
                margin: '0 auto',
                '& .MuiLinearProgress-barColorPrimary': {
                    backgroundColor: '#4CAF50',
                    borderRadius: '10px',
                    animation: `${load} 3s normal forwards`,
                }
             }}
        />
    );
};

export default ProgressbarComponent;
