import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import user from '../assets/images/user.png';
import TableHeaderComponent from './TableHeaderComponent';


const GeneralDashboardTable = ({ columns, data }) => {

    const [alignment, setAlignment] = React.useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const isOnline = (columnName, cellValue) => {
        return columnName === 'STATUS' && cellValue === 'ONLINE';
    };

    const isOffline = (columnName, cellValue) => {
        return columnName === 'STATUS' && cellValue === 'OFFLINE';
    };

    const isFunctionColumn = (columnName) => {
        return columnName === 'FUNCTION';
    };

    const isNameColumn = (columnName) => {
        return columnName === 'NAME';
    };

    return (
        <>
            <TableHeaderComponent left={'Todays Schedule'} right={'Sat 12th Aug, 2023'}/>
            <TableContainer component={Paper} sx={{
                backgroundColor: '#FFFFFF',
                position: 'relative',
                top: -40,
                zIndex: 0,
                paddingTop: 8,
                width: '52.3rem'
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
                        {data.map((row, rowIndex) => (
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
                                        {isOnline(column, row[column]) ? (
                                            <div style={{
                                                background: 'linear-gradient(180deg, #66BB6A 0%, #43A047 100%)',
                                                borderRadius: 50,
                                                color: '#FFF',
                                                width: 80,
                                                fontFamily: 'Roboto',
                                                fontSize: '12px',
                                                fontWeight: '900',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingTop: 2,
                                            }}>{row[column]}</div>
                                        ) : isOffline(column, row[column]) ? (
                                            <div style={{
                                                background: 'black',
                                                borderRadius: 50,
                                                color: '#FFF',
                                                width: 80,
                                                fontFamily: 'Roboto',
                                                fontSize: '12px',
                                                fontWeight: '900',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingTop: 2,
                                            }}>{row[column]}</div>
                                        ) : isFunctionColumn(column) ? (
                                            <div>
                                                <span>{row[column]}</span><br />
                                                <span style={{
                                                    color: '#555',
                                                    fontSize: '9px',
                                                    fontWeight: '400'
                                                }}>UCSC</span>
                                            </div>
                                        ) : isNameColumn(column) ? (
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
                                        )
                                        }
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
    );
};


export default GeneralDashboardTable;