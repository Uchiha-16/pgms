import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";



// Helper functions to determine cell conditions

const isChecked = (columnName, cellValue) => {
  return columnName === "STATUS" && cellValue === 1;
};

const isUnchecked = (columnName, cellValue) => {
  return columnName === "STATUS" && cellValue === 0;
};

const isPending = (columnName, cellValue) => {
  return (
    (columnName === "PCCONFIRMATION" || columnName === "STAFFCONFIRMATION") &&
    cellValue === "PENDING"
  );
};

const isMarked = (columnName, cellValue) => {
  return (
    (columnName === "PCCONFIRMATION" || columnName === "STAFFCONFIRMATION") &&
    cellValue === "MARKED"
  );
};

const isAction = (columnName, row) => {
  return (
    columnName === "ACTION" &&
    (isPending("PCCONFIRMATION", row["PCCONFIRMATION"]) ||
      isPending("STAFFCONFIRMATION", row["STAFFCONFIRMATION"]))
  );
};

// Comparator functions for sorting
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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Stable sort function
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

// Main table component
export default function AttendanceTrackingComponent({ rows, headCells }) {
  const navigate = useNavigate();
  const { auth } = useAuth();
 

  const handleStatusCheckboxChange = (row) => {
    const { SESSIONID } = row;
    const confirmed = window.confirm('Do you want to perform this action?');
    if (!confirmed) {
        row.STATUS = 0;
        return;
    }

    const payload = []

    axios.put(`/attendance/updatePcId/${SESSIONID}/${auth.user_id}`, payload)
      .then(response => {
        // Handle the successful response, e.g., update your state
        console.log('PUT request successful', response.data);
        //refresh page
        window.location.reload();
      })
      .catch(error => {
        // Handle any errors
        console.error('PUT request error', error);
      });
  };

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("NAME");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box>
      <Paper
        sx={{
          background: "transparent",
          boxShadow: "none",
          height: "auto",
          zIndex: 0,
        }}
      >
        <TableContainer
          sx={{
            backgroundColor: "#FFFFFF",
            position: "relative",
            top: "-6rem",
            zIndex: 0,
            paddingTop: "78px",
            paddingBottom: 3,
            borderRadius: "5px",
          }}
        >
          <Table aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align="left"
                    padding="normal"
                    sortDirection={orderBy === headCell.id ? order : false}
                    sx={{
                      color: "#CCC9C9",
                      fontFamily: "Roboto",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "800",
                      paddingTop: 4,
                      paddingLeft: 3,
                      paddingBottom: 4,
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={() => handleRequestSort(headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row, index) => (
                <TableRow key={index}>
                  {headCells.map((headCell, colIndex) => (
                    <TableCell
                      component="th"
                      scope="row"
                      key={`${index}-${colIndex}`}
                      sx={{
                        paddingLeft: 3,
                        color: "#7B809A",
                        fontFamily: "Roboto",
                        fontSize: "12px",
                        fontWeight: "700",
                        paddingTop: 2.3,
                        paddingBottom: 2.3,
                      }}
                    >
                      {isChecked(headCell.id, row[headCell.id]) ? (
                        <Checkbox
                          defaultChecked

                          sx={{
                            color: "#D9D9D9",
                            "&.Mui-checked": {
                              color: "#43A047",
                            },
                          }}
                        />
                      ) : isUnchecked(headCell.id, row[headCell.id]) ? (
                        <Checkbox
                        
                        onChange={() => handleStatusCheckboxChange(row)}
                          sx={{
                            color: "#D9D9D9",
                            "&.Mui-checked": {
                              color: "#43A047",
                            },
                          }}
                        />
                      ) : isPending(headCell.id, row[headCell.id]) ? (
                        <div
                          style={{
                            background: "#FFA726",
                            borderRadius: '5px',
                            color: "white",
                            width: 80,
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            fontWeight: "900",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 2,
                          }}
                        >
                          {row[headCell.id]}
                        </div>
                      ) : isMarked(headCell.id, row[headCell.id]) ? (
                        <div
                          style={{
                            background: "#4CAF50",
                            borderRadius: '5px',
                            color: "white",
                            width: 80,
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            fontWeight: "900",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 2,
                          }}
                        >
                          {row[headCell.id]}
                        </div>
                      ) : isAction(headCell.id, row) ? (
                        <button
                          style={{
                            background: "#FFF", // White background
                            border: "1px solid #1A73E8", // Blue outline
                            color: "#1A73E8", // Blue font color
                            width: 80,
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            fontWeight: "900",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 2,
                            borderRadius: '5px',
                          }}
                           // Handle the "Inform" button click
                        >
                          Inform
                        </button>
                      ) : (
                        row[headCell.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Pagination outside the TableContainer */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          position: "relative",
          top: "-5rem",
        }}
      />
    </Box>
  );
}
