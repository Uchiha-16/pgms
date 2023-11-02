import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import useAxiosMethods from "../hooks/useAxiosMethods";


//dummydata
// const tableData = [
//   {
//     year: 20202021,
//     budget: 50000,
//     rate: 4.5,
//     misCoordinator: "John Doe",
//     mcsCoordinator: "Jane Smith",
//     mitCoordinator: "Alice Johnson",
//     mbaCoordinator: "Bob Wilson",
//   },
//   {
//     year: 20212022,
//     budget: 55000,
//     rate: 4.8,
//     misCoordinator: "Ella Davis",
//     mcsCoordinator: "Chris Brown",
//     mitCoordinator: "Grace Lee",
//     mbaCoordinator: "David Allen",
//   },
//   // Add more data as needed
// ];

const PreviousIntakeDetails = () => {

  const intake_URL = `/intake/get`
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState("year");
  const [order, setOrder] = useState("asc");
  const [data, setData] = useState([]);
  const { get } = useAxiosMethods();


  //get data from the database using axios
  useEffect(() => {
    get(intake_URL, setData)
    console.log(data);
  }, [])

  const tableData = data.map(intake => ({
    year: intake.year,
    budget: intake.budget,
    rate: intake.rate,
    misCoordinator: `${intake.mis.firstname} ${intake.mis.lastname}`,
    mcsCoordinator: `${intake.mcs.firstname} ${intake.mcs.lastname}`,
    mitCoordinator: `${intake.mit.firstname} ${intake.mit.lastname}`,
    mbaCoordinator: `${intake.mba.firstname} ${intake.mba.lastname}`,
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const createSortHandler = (property) => (event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "year"}
                  direction={orderBy === "year" ? order : "asc"}
                  onClick={createSortHandler("year")}
                >
                  Intake
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "budget"}
                  direction={orderBy === "budget" ? order : "asc"}
                  onClick={createSortHandler("budget")}
                >
                  Budget(Rs.)
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "rate"}
                  direction={orderBy === "rate" ? order : "asc"}
                  onClick={createSortHandler("rate")}
                >
                  Rate per Hour(Rs.)
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "misCoordinator"}
                  direction={orderBy === "misCoordinator" ? order : "asc"}
                  onClick={createSortHandler("misCoordinator")}
                >
                  Coordinator for MIS
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "mcsCoordinator"}
                  direction={orderBy === "mcsCoordinator" ? order : "asc"}
                  onClick={createSortHandler("mcsCoordinator")}
                >
                  Coordinator for MCS
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "mitCoordinator"}
                  direction={orderBy === "mitCoordinator" ? order : "asc"}
                  onClick={createSortHandler("mitCoordinator")}
                >
                  Coordinator for MIT
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "mbaCoordinator"}
                  direction={orderBy === "mbaCoordinator" ? order : "asc"}
                  onClick={createSortHandler("mbaCoordinator")}
                >
                  Coordinator for MBA
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(tableData, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.budget}</TableCell>
                  <TableCell>{row.rate}</TableCell>
                  <TableCell>{row.misCoordinator}</TableCell>
                  <TableCell>{row.mcsCoordinator}</TableCell>
                  <TableCell>{row.mitCoordinator}</TableCell>
                  <TableCell>{row.mbaCoordinator}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={tableData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PreviousIntakeDetails;

// Helper functions for sorting
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

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
