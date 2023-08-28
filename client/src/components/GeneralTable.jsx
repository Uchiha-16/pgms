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
import user from "../assets/images/user.png";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";

// Helper functions to determine cell conditions
const isOnline = (columnName, cellValue) => {
  return columnName === "STATUS" && cellValue === "ONLINE";
};

const isOffline = (columnName, cellValue) => {
  return columnName === "STATUS" && cellValue === "OFFLINE";
};

const isFunctionColumn = (columnName) => {
  return columnName === "FUNCTION";
};

const isNameColumn = (columnName) => {
  return columnName === "NAME";
};

// const isRequestColumn = (columnName) => {
//     return columnName === 'Request';
// };

const isEdit = (columnName) => {
  return columnName === "ACTION";
};

const isChecked = (columnName, cellValue) => {
  return columnName === "STATUS1" && cellValue === 1;
};

const isUnchecked = (columnName, cellValue) => {
  return columnName === "STATUS1" && cellValue === 0;
};

const isPending = (columnName, cellValue) => {
  return (
    (columnName === "LECTURER CONFRIMATION" || columnName === "STAFF CONFIRMATION") &&
    cellValue === "PENDING"
  );
};

const isMarked = (columnName, cellValue) => {
  return (
    (columnName === "LECTURER CONFRIMATION" || columnName === "STAFF CONFIRMATION") &&
    cellValue === "MARKED"
  );
};

const isAction = (columnName) => {
  return columnName === "ACTION";
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

// Component for the table header
function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            padding: "0 0 0 28px",
          }}
        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            sx={{
              paddingBottom: "0px",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
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
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array.isRequired,
};

// Component for the table toolbar
function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        "& .MuiToolbar-root": {
          float: "right",
          zIndex: 1,
        },
        zIndex: 1,
        float: "right",
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div">{numSelected} selected</Typography>
      ) : (
        <Typography component="div">0 selected</Typography>
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

// Main table component
export default function GeneralTable({ rows, headCells }) {
  const navigate = useNavigate();

  const navigateProfile = (userID) => {
    return () => {
      navigate(`/profile/${userID}`);
    };
  };

  const profileImage = user?.profileImage || "user.png";

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
        selected.slice(selectedIndex + 1)
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
        <EnhancedTableToolbar
          numSelected={selected.length}
          sx={{
            "& .MuiToolbar-root": {
              float: "right",
              zIndex: 1,
            },
            zIndex: 1,
            float: "right",
          }}
        />
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
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.NAME);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    key={index}
                    hover
                    onClick={(event) => handleClick(event, row.NAME)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      padding="checkbox"
                      sx={{
                        padding: "0 0 0 28px",
                      }}
                    >
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    {headCells.map((headCell, colIndex) => (
                      <TableCell
                        component="th"
                        id={labelId}
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
                        {isOnline(headCell.id, row[headCell.id]) ? (
                          <div
                            style={{
                              background:
                                "linear-gradient(180deg, #66BB6A 0%, #43A047 100%)",
                              borderRadius: 50,
                              color: "#FFF",
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
                        ) : isOffline(headCell.id, row[headCell.id]) ? (
                          <div
                            style={{
                              background: "black",
                              borderRadius: 50,
                              color: "#FFF",
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
                        ) : isFunctionColumn(headCell.id) ? (
                          <div>
                            <span>{row[headCell.id]}</span>
                            <br />
                            <span
                              style={{
                                color: "#555",
                                fontSize: "9px",
                                fontWeight: "400",
                              }}
                            >
                              UCSC
                            </span>
                          </div>
                        ) : isNameColumn(headCell.id) ? (
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <div
                              style={{
                                marginRight: 10,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={require(`../assets/images/${row["PROFILEPIC"]}`)}
                                width={30}
                                height={30}
                                alt="user"
                              />
                            </div>
                            <div>
                              <span
                                style={{
                                  color: "#000",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                              >
                                {row[headCell.id]}
                              </span>
                              <br />
                              <span
                                style={{
                                  color: "#4A4949",
                                  fontSize: "10px",
                                  fontWeight: "400",
                                  //give the email
                                }}
                              >
                                {row["EMAIL"]}
                              </span>
                            </div>
                          </div>
                        ) : isEdit(headCell.id) ? (
                          <span
                            onClick={navigateProfile(row["ID"])}
                            style={{ cursor: "pointer" }}
                          >
                            {row[headCell.id]}
                          </span>
                        ) : isChecked(headCell.id) ? (
                          <Checkbox
                            defaultChecked
                            sx={{
                              color: "#D9D9D9",
                              "&.Mui-checked": {
                                color: "#43A047",
                              },
                            }}
                          />
                        ) : isUnchecked(headCell.id) ? (
                          <Checkbox
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
                              background: "black",
                              borderRadius: 50,
                              color: "#FFA726",
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
                              background: "black",
                              borderRadius: 50,
                              color: "#4CAF50",
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
                        ) : isAction(headCell.id) ? (
                          <button
                            style={{
                              background: "linear-gradient(180deg, #2196F3 0%, #1976D2 100%)",
                              borderRadius: 50,
                              color: "#FFF",
                              width: 80,
                              fontFamily: "Roboto",
                              fontSize: "12px",
                              fontWeight: "900",
                              border: "none",
                              cursor: "pointer",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              paddingTop: 2,
                            }}
                          >
                            Inform
                          </button>
                        ) : (
                          row[headCell.id]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
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
      </Paper>
    </Box>
  );
}
