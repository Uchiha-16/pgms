import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import user from '../assets/images/user.png';
import TablePagination from '@mui/material/TablePagination';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PendingIcon from '@mui/icons-material/QueryBuilder';

const NominationsTable = ({ columns, data }) => {
    const [alignment, setAlignment] = useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const isAccepted = (columnName, cellValue) => {
        return columnName === 'STATUS' && cellValue === 'Accepted';
    };

    const isRejected = (columnName, cellValue) => {
        return columnName === 'STATUS' && cellValue === 'Rejected';
    };

    const isPending = (columnName, cellValue) => {
        return columnName === 'STATUS' && cellValue === 'Pending';
    };

    const isFunctionColumn = (columnName) => {
        return columnName === 'Function';
    };

    const isRequestColumn = (columnName) => {
        return columnName === 'Request';
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
    const visibleRows = data.slice(startRowIndex, endRowIndex);

    return (
        <>
            {/* Header */}
            <div style={{
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
                <h3>Nominations</h3>
                {/* <AddCircleIcon sx={{
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
                }} /> */}
            </div>

            {/* Toggle buttons */}
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{
                    color: "#343A40",
                    backgroundColor: "#DEE2E6",
                    filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
                    borderRadius: 1,
                    height: 30,
                    float: 'right',
                    marginRight: 2.5,
                }}
            >
                <ToggleButton value="Accepted" sx={{
                    border: 'none',
                    fontSize: 10,
                    color: '#343A40',
                    fontFamily: 'Inter',
                    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: '0.3s',
                    backgroundColor: '#66BB6A',
                    "&.Mui-selected": {
                        backgroundColor: '#66BB6A',
                    }
                }}>
                    Accepted
                </ToggleButton>
                <ToggleButton value="Rejected" sx={{
                    border: 'none',
                    fontSize: 10,
                    color: '#343A40',
                    fontFamily: 'Inter',
                    transition: '0.3s',
                    backgroundColor: '#EF5350',
                    "&.Mui-selected": {
                        backgroundColor: '#EF5350',
                    }
                }}>
                    Rejected
                </ToggleButton>
                <ToggleButton value="Pending" sx={{
                    border: 'none',
                    fontSize: 10,
                    color: '#343A40',
                    fontFamily: 'Inter',
                    transition: '0.3s',
                    backgroundColor: '#FFD54F',
                    "&.Mui-selected": {
                        backgroundColor: '#FFD54F',
                    }
                }}>
                    Pending
                </ToggleButton>
            </ToggleButtonGroup>

            {/* Table */}
            <TableContainer component={Paper} sx={{
                backgroundColor: '#FFFFFF',
                position: 'relative',
                top: -40,
                zIndex: 0,
                paddingTop: 8,
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column} sx={{
                                    color: '#CCC9C9',
                                    fontFamily: 'Roboto',
                                    fontSize: '10px',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    paddingTop: 4,
                                    paddingLeft: 3
                                }}>
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={`${rowIndex}-${colIndex}`}
                                        sx={{
                                            paddingLeft: 3,
                                            color: '#7B809A',
                                            fontFamily: 'Roboto',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            paddingTop: 2.3,
                                            paddingBottom: 2.3,
                                        }}>
                                        {isAccepted(column, row[column]) ? (
                                            <CheckCircleIcon sx={{ color: '#66BB6A', fontSize: '14px' }} />
                                        ) : isRejected(column, row[column]) ? (
                                            <HighlightOffIcon sx={{ color: '#EF5350', fontSize: '14px' }} />
                                        ) : isPending(column, row[column]) ? (
                                            <PendingIcon sx={{ color: '#FFD54F', fontSize: '14px' }} />
                                        ) : isFunctionColumn(column) ? (
                                            <div>
                                                <span>{row[column]}</span><br />
                                                <span style={{
                                                    color: '#555',
                                                    fontSize: '9px',
                                                    fontWeight: '400'
                                                }}>UCSC</span>
                                            </div>
                                        ) : isRequestColumn(column) ? (
                                            <div style={{
                                                display: 'flex'
                                            }}>
                                                <div style={{
                                                    marginRight: 10,
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <img src={user} width={30} height={30} alt="user" />
                                                </div>
                                                <div>
                                                    <span style={{
                                                        color: '#000',
                                                        fontSize: '14px',
                                                        fontWeight: '500'
                                                    }}>{row[column]}</span>
                                                    <br />
                                                    <span style={{
                                                        color: '#4A4949',
                                                        fontSize: '10px',
                                                        fontWeight: '400'
                                                    }}>john@gmail.com</span>
                                                </div>
                                            </div>
                                        ) : (
                                            row[column]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Table Pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
};

export default NominationsTable;
