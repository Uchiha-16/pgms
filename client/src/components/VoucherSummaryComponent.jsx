import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(status, name) {
    return { status, name };
}

const rows = [
    createData('Approved', 'Payment Voucher for the MIT Program'),
    createData('Pending', 'Payment Voucher for the MIS Program'),
    createData('Approved', 'Payment Voucher for the MCS Program'),
    createData('Approved', 'Payment Voucher for the MBAnalytics Program'),
];

export default function VoucherSummaryComponent() {
    return (
        <TableContainer component={Paper} sx={{
            boxShadow: 'none',
            marginTop: '3rem',
            marginBottom: '2rem',
            marginLeft: '.5rem',
            width: 'auto',
        }}>
            <Table aria-label="simple table">
                <TableBody >
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell scope="row" sx={{
                                fontSize: '12px',
                                border: 'none',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                fontWeight: 600,
                                fontFamily: 'Inter',
                                textTransform: 'uppercase',
                                width: '10%',
                            }}>
                            {row.status === 'Approved' ? (
                                <div style={{
                                    borderRadius: '5px',
                                    background: '#4CAF50',
                                    width: '100%',
                                    padding: '5px 10px',  
                                }}>{row.status}</div>
                            ) : (
                                <div style={{
                                    borderRadius: '5px',
                                    background: '#FFA726',
                                    width: '100%',
                                    padding: '5px 10px',
                                }}>{row.status}</div>
                            )}</TableCell>
                            <TableCell align="right" title="view voucher" sx={{
                                fontSize: '12px',
                                border: 'none',
                                textAlign: 'left',
                                color: '#495057',
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                cursor: 'pointer',
                            }}>{row.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}