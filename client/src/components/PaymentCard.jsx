import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ProgressbarComponent from './ProgressbarComponent';
import VoucherSummaryComponent from './VoucherSummaryComponent';
import { width } from '@mui/system';

const voucherSummaryStyle = {
    maxHeight: '0',
    overflow: 'hidden',
    transition: '0.4s max-height',
};

const expandedVoucherSummaryStyle = {
    maxHeight: '500px', /* Adjust this value as needed */
    transition: '0.4s max-height',
};


const PaymentCard = ({ columns, data, done, btn }) => {

  

    const isAdded = (columnName, cellValue) => {
        return columnName === 'AddtoVoucher' && cellValue === 1;
    };

    const isNotAdded = (columnName, cellValue) => {
        return columnName === 'AddtoVoucher' && cellValue === 0;
    };

    const isPercentage = (columnName, cellValue) => {
        return columnName === 'Completion' && cellValue.includes('%');
    }

    const [isExpanded, setIsExpanded] = useState(false);

    const handleViewMoreClick = () => {
        setIsExpanded(true);
    };

    const handleViewLessClick = () => {
        setIsExpanded(false);
    };

    return (
        <>
            <TableContainer component={Paper} sx={{
                backgroundColor: '#FFFFFF',
                position: 'relative',
                top: -40,
                zIndex: 0,
                paddingTop: 5,
                width: '50 rem',
                boxShadow: '0px 13px 20px -7px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden',
            }}>
                {done === 1 && btn === 1 ? (
                    <><Box sx={{
                        display: 'flex',
                        paddingRight: '18px',
                        paddingLeft: '22px',
                        margin: 0,
                        alignItems: 'center',
                        paddingTop: '15px',
                        }}>
                    </Box></>
                ) : ( '' )}
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
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={`${rowIndex}-${colIndex}`}
                                        sx={{
                                            paddingLeft: 3,
                                            color: '#000',
                                            fontFamily: 'Roboto',
                                            fontSize: '13px',
                                            fontWeight: '500',
                                            paddingTop: 2.3,
                                            paddingBottom: 2.3,
                                        }}>
                                       

                                            
                                        { isPercentage(column, row[column]) ? (
                                            <><div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ color: '#898989' }}>{row[column]}</p>
                                                <ProgressbarComponent percentage={row[column].replace('%', '')} />
                                            </div></> 
                                        ) :
                                         
                                        isAdded(column, row[column]) ? (
                                            <Checkbox defaultChecked sx={{
                                                color: '#D9D9D9',
                                                '&.Mui-checked': {
                                                    color: '#43A047',
                                                },
                                            }} />
                                        ) :
                                        isNotAdded(column, row[column]) ? (
                                            <Checkbox defaultChecked sx={{
                                                color: '#D9D9D9',
                                                '&.Mui-checked': {
                                                    color: '#43A047',
                                                },
                                            }} />
                                        ) :

                                        
                                        (
                                            row[column]
                                        )
                                        }
                                        
                                                
                                
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                
                </Table>
                <div className="voucher-summary" sx={{ ...voucherSummaryStyle, ...(isExpanded && expandedVoucherSummaryStyle) }}>
                    {done === 1 && btn === 1 && isExpanded && <VoucherSummaryComponent />}
                </div>
            </TableContainer></>
    );
};


export default PaymentCard;