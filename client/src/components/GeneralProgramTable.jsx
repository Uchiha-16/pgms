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


const GeneralProgramTable = ({ columns, program, dataP1, dataP2 }) => {
    
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
        <>
        <Box sx={{
            backgroundColor: '#FFFFFF',
            position: 'relative',
            top: -40,
            zIndex: 0,
            paddingTop: 8,
            borderRadius: '7px',
        }}>

        {/* Map through each program */}
        {program.map((prog, index) => (
        <TableContainer key={index} component={Paper} sx={{
            background: 'transparent',
            boxShadow: 'none',
            border: 'none',
            width: '100%',
            borderTop: '1px solid #F0F2F5',
            marginTop: 1,
            paddingBottom: 8,
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
                }}>{prog.title}</p>
                <p style={{ 
                    margin: 0,
                    color: '#495057',
                    fontSize: '13px',
                    fontWeight: '500',
                }}>{prog.pc}</p>
                <p style={{ 
                    margin: 0,
                    color: '#4A4949',
                    fontSize: '11px',
                }}>{prog.pcName}</p>
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
                        {columns.map((column, colIndex) => (
                            <TableCell key={colIndex} sx={{
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
                    {index === 0 ? dataP1.map((rowData, rowIndex) => (
                        <TableRow key={rowIndex}> 
                            {columns.map((column, colIndex) => (
                                <TableCell key={colIndex} sx={{
                                    fontFamily: 'Roboto',
                                    fontSize: '12px',
                                    paddingTop: 1,
                                    paddingBottom: 1,
                                    paddingLeft: 2,
                                    border: '1px solid white',
                                }}>
                                    {rowData[column]}
                                </TableCell>
                            ))}
                        </TableRow>
                    )) : dataP2.map((rowData, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <TableCell key={colIndex} sx={{
                                    fontFamily: 'Roboto',
                                    fontSize: '12px',
                                    paddingTop: 1,
                                    paddingBottom: 1,
                                    paddingLeft: 2,
                                    border: '1px solid white',
                                }}>
                                    {rowData[column]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        ))}
        </Box>     
                               
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            // count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </>
    );
};


export default GeneralProgramTable;