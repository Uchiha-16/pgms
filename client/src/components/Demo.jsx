import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import TableHeaderComponent from './TableHeaderComponent';

function createData(NAME, ROLE, STATUS, EMAIL, ACTION) {
    return {
        NAME, 
        ROLE, 
        STATUS, 
        EMAIL, 
        ACTION
    };
}

const rows = [
    createData('Johny Michael', 'Lecturer', 'ONLINE', 'john@gmail.com', 'Edit'),
    createData('Alexa Liras', 'Lecturer', 'ONLINE', 'alexa@gmail.com', 'Edit'),
    createData('Laurent Perrier', 'Lecturer', 'OFFLINE', 'laurent@gmail.com', 'Edit'),
    createData('Michael Levi', 'Lecturer', 'ONLINE', 'michael@gmail.com', 'Edit'),
    createData('Richard Gran', 'Visiting Lecturer', 'ONLINE', 'richard@gmail.com', 'Edit'),
    createData('Miriam Eric', 'Lecturer', 'ONLINE', 'miriam@gmail.com', 'Edit'),
    createData('Anne Marie', 'Lecturer', 'ONLINE', 'annemarie@gmail.com', 'Edit'),
    createData('Nick Daniel', 'Visiting Lecturer', 'OFFLINE', 'nickdaniel@gmail.com', 'Edit'),
    createData('KitKat', 'Staff', 'OFFLINE', 'kitkat@gmail.com', 'Edit'),
    createData('Lollipop', 'Staff', 'ONLINE', 'lollipop@gmail.com', 'Edit'),
    createData('Marshmallow', 'Staff', 'OFFLINE', 'marshmellow@gmail.com', 'Edit'),
    createData('Nougat', 'Staff', 'ONLINE', 'nougat@gmail.com', 'Edit'),
    createData('Oreo', 'Staff', 'ONLINE', 'oreo@gmail.com', 'Edit'),
];

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

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'NAME',
        numeric: false,
        disablePadding: true,
        label: 'NAME',
    },
    {
        id: 'ROLE',
        numeric: false,
        disablePadding: true,
        label: 'ROLE',
    },
    {
        id: 'STATUS',
        numeric: false,
        disablePadding: true,
        label: 'STATUS',
    },
    {
        id: 'EMAIL',
        numeric: false,
        disablePadding: true,
        label: 'EMAIL',
    },
    {
        id: 'ACTION',
        numeric: false,
        disablePadding: true,
        label: 'ACTION',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='left'
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
        <Toolbar>
            {numSelected > 0 ? (
                <Typography
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    component="div"
                >
                    0 selected
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Delete" disabled>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('NAME');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.NAME);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box>
            <TableHeaderComponent left={'Todays Schedule'} right={'Sat 12th Aug, 2023'} />
            <Paper sx={{ background: 'transparent', boxShadow: 'none' }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.NAME);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.NAME)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.NAME}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.NAME}
                                        </TableCell>
                                        <TableCell align="left" sx={{ paddingLeft: 0 }}>{row.ROLE}</TableCell>
                                        <TableCell align="left" sx={{ paddingLeft: 0 }}>{row.STATUS}</TableCell>
                                        <TableCell align="left" sx={{ paddingLeft: 0 }}>{row.EMAIL}</TableCell>
                                        <TableCell align="left" sx={{ paddingLeft: 0 }}>{row.ACTION}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (53) * emptyRows,
                                    }}
                                >
                                    <TableCell/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
