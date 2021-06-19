import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import Completed from "@material-ui/icons/DoneAllOutlined";
import Failed from "@material-ui/icons/SyncProblemOutlined";
import Rejected from "@material-ui/icons/ReportOffOutlined";

import SystemAnalystics from "../../core/dashboard/system-analysis";
import Loader from "./Loader";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  success: {
    color: "#0F7D58",
    background: "#F2F2F2",
    fontWeight: "900",
  },
  info: {
    color: "#4285F4",
    background: "#F2F2F2",
    fontWeight: "900",
  },
  warning: {
    color: "#F4B400",
    background: "#F2F2F2",
    fontWeight: "900",
  },
}));

export default function Analysis() {
  const classes = useStyles();

  const [state] = SystemAnalystics();
  const successTrans = state.payload.filter((p) => p.information.done === "1")
    .length;
  const pendingTrans = state.payload.filter((p) => p.information.done === "0")
    .length;
  const failedTrans = state.payload.filter((p) => p.information.done === "-1")
    .length;


  return (
    <>
      {!state.success ==="success" ? (
        <Loader />
      ) : (
        <Card className="card card-dashboard mb-2">
          <h6 className="card-title">System Analysis</h6>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.success}>
                  <Completed />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${successTrans} Completed`}
                secondary="Completed Transactions"
              />
            </ListItem>

            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.info}>
                  <Failed />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${pendingTrans} Pending`}
                secondary="Pending Transactions"
              />
            </ListItem>

            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.warning}>
                  <Rejected />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${failedTrans} Rejected`}
                secondary="Rejected Transactions"
              />
            </ListItem>
          </List>
        </Card>
      )}
    </>
  );
}
