import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import ArrowDown from "@material-ui/icons/DoubleArrowSharp";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RefundDetails from "./CompletedDetails";

import fn from "../../services/func";
import ms from "../../services/misc";
import { Preloader } from "../preloader/Preloader";
import { RegistrationContext } from "../../view/Registration";

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

const headCells = [
  {
    id: "TransactionId",
    numeric: false,
    disablePadding: true,
    label: " Transaction ID",
  },
  { id: "amount", numeric: true, disablePadding: false, label: "Amount (NGN)" },
  { id: "time", numeric: true, disablePadding: false, label: "Time" },
  { id: "status", numeric: true, disablePadding: false, label: "Refund Status" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="tableHead">
      <TableRow>
        <TableCell padding="checkbox" align="center">
          #
        </TableCell>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.TransactionId ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.TransactionId}
              direction={orderBy === headCell.TransactionId ? order : "asc"}
              onClick={createSortHandler(headCell.TransactionId)}
            >
              {headCell.label}
              {orderBy === headCell.TransactionId ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  yellow: {
    color: "#F3CE11",
    background: "rgba(243,206,17,0.2)",
  },
  green: {
    color: "#0CE221",
    background: "rgba(12,226,33,0.2)",
    width: "25px",
    height: "25px",
  },
  icon: {
    fontSize: "15px",
  },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = () => {
  const classes = useStyles();
  return (
    <Toolbar>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Transactions
      </Typography>

      <Tooltip title="Export">
        <IconButton aria-label="Export">
          <img src="/img/app/export.svg" alt="export icon" />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("transactionId");
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  //set row index for modal use
  const [index, setIndex] = useState(0);
  // Handle row click
  const handleClick = (e, index) => {
    setIndex(index);
    showModal();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const state = useContext(RegistrationContext);
  const rows = state.payload.filter((p) => p.information.done === "-1");

  

  //Modal
  const [values, setValues] = React.useState({
    loadin: false,
    visible: false,
  });

  const showModal = () => {
    setValues({ ...values, visible: true });
  };

  const handleCancel = () => {
    setValues({ visible: false });
  };

  return (
    <div className={classes.root}>
      <>
        {!state.success === "success" ? (
          <Preloader />
        ) : (
          <div className="card pt-0">
            <EnhancedTableToolbar />
            <TableContainer>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                  key={fn.randomNumber()}
                />

                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      row = row.information;
                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, index)}
                          tabIndex={-1}
                          key={fn.randomNumber()}
                        >
                          <TableCell>
                            <Avatar className={classes.green}>
                              <ArrowDown className={classes.icon} />
                            </Avatar>
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            &nbsp;&nbsp;{row.paymentReference}
                          </TableCell>
                          <TableCell align="right"> {row.amount}</TableCell>
                          <TableCell align="right">{row.dateCreated}</TableCell>
                          <TableCell align="right">
                            <span
                              className={`badge ${ms.statusColor(row.refund)}`}
                            >
                              {ms.paymentRefunded(row.refund)}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <RefundDetails
              values={values}
              handleCancel={handleCancel}
              row={rows.length > 0 ? rows[index].information : []}
            />
          </div>
        )}
      </>
    </div>
  );
}
