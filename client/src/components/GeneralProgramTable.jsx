import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import user from '../assets/images/user.png';
import TablePagination from '@mui/material/TablePagination';
import { Box } from '@mui/system';


const GeneralProgramTable = ({ columns, program }) => {
    
    const [alignment, setAlignment] = React.useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page
    const [page, setPage] = useState(0); // Current page number
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset the page number when rows per page changes
    };
    const startRowIndex = page * rowsPerPage;
    const endRowIndex = startRowIndex + rowsPerPage;
    // const visibleRows = data.slice(startRowIndex, endRowIndex);

    return (
        <><div style={{
            display: 'flex',
            borderRadius: '7px',
            background: 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%)',
            boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.22)',
            color: '#FFFFFF',
            paddingRight: '20px',
            paddingLeft: '20px',
            width: '97%',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            zIndex: 1,
        }}>
            <h3>Programs</h3>
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
            <Box sx={{
                backgroundColor: '#FFFFFF',
                position: 'relative',
                top: -40,
                zIndex: 0,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: '7px',
                }}>
                <TableContainer component={Paper} sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    border: 'none',
                    width: '100%',
                    borderTop: '1px solid #F0F2F5',
                    marginTop: 1,
                    paddingBottom: 5,
                    }}>
                    <Box sx={{
                        marginLeft: 10,
                        marginTop: 3,
                        marginBottom: 3,
                        textAlign: 'left',
                        fontFamily: 'Roboto',
                    }}>
                        <p style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            margin: 0,
                            paddingBottom: 3,
                        }}>{program[0].title}</p>
                        <p style={{ 
                            margin: 0,
                            color: '#495057',
                            fontSize: '13px',
                            fontWeight: '500',
                        }}>{program[0].pc}</p>
                        <p style={{ 
                            margin: 0,
                            color: '#4A4949',
                            fontSize: '11px',
                        }}>{program[0].pcName}</p>
                    </Box>
                    <Table sx={{ 
                        width: '75%',
                        margin: 'auto',
                        background: '#EEE',
                        borderRadius: '10px',
                        border: '1px solid white',
                        }}>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column} sx={{
                                        color: 'black',
                                        fontFamily: 'Roboto',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        padding: 1,
                                        textAlign: 'left',
                                        paddingLeft: 2,
                                        border: '1px solid white',
                                        }}>
                                        {column}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={colIndex} 
                                        sx={{
                                            fontFamily: 'Roboto',
                                            fontSize: '12px',
                                            paddingTop: 1,
                                            paddingBottom: 1,
                                            paddingLeft: 2,
                                            border: '1px solid white',
                                        }}>
                                            Data
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <TableContainer component={Paper} sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    border: 'none',
                    width: '100%',
                    borderTop: '1px solid #F0F2F5',
                    marginTop: 1,
                    paddingBottom: 5,
                    }}>
                    <Box sx={{
                        marginLeft: 10,
                        marginTop: 3,
                        marginBottom: 3,
                        textAlign: 'left',
                        fontFamily: 'Roboto',
                        }}>
                        <p style={{
                            fontSize: '16px',
                            fontWeight: '500',
                             margin: 0,
                            paddingBottom: 3,
                            }}>{program[0].title}</p>
                        <p style={{
                            margin: 0,
                            color: '#495057',
                            fontSize: '13px',
                            fontWeight: '500',
                        }}>{program[0].pc}</p>
                        <p style={{
                            margin: 0,
                            color: '#4A4949',
                            fontSize: '11px',
                        }}>{program[0].pcName}</p>
                    </Box>
                    <Table sx={{
                        width: '75%',
                        margin: 'auto',
                        background: '#EEE',
                        borderRadius: '10px',
                        border: '1px solid white',
                        }}>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column} sx={{
                                        color: 'black',
                                        fontFamily: 'Roboto',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        padding: 1,
                                        textAlign: 'left',
                                        paddingLeft: 2,
                                        border: '1px solid white',
                                    }}>
                                        {column}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={colIndex} sx={{
                                            fontFamily: 'Roboto',
                                            fontSize: '12px',
                                            paddingTop: 1,
                                            paddingBottom: 1,
                                            paddingLeft: 2,
                                            border: '1px solid white',
                                            }}>
                                            Data
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>                        
            
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                // count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /></>
    );
};


export default GeneralProgramTable;