import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const GeneralTable = ({ columns, data }) => {
    return (
        <><div style={{
            display: 'flex',
            borderRadius: '7px',
            background: 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%)',
            boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.22)',
            color: '#FFFFFF',
            paddingRight: '20px',
            paddingLeft: '20px',
        }}>
            <h3>Users</h3>
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
        </div><TableContainer component={Paper} sx={{
            backgroundColor: '#FFFFFF'
        }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column}>{column}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={`${rowIndex}-${colIndex}`}>{row[column]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
    );
};


export default GeneralTable;