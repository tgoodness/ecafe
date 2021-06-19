import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import Wallet from "@material-ui/icons/RedeemOutlined";
import Disbursement from "@material-ui/icons/AddToHomeScreenOutlined";
//
import Alert from "../Alert-Black";
import fn from "../../services/func";
import Summary from "../../core/dashboard/account-summary";
import Loader from "./AccountLoader";

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

export default function AccountSummary() {
  const classes = useStyles();
  const [state, handleClose] = Summary("rebuild");
  
  return (
    <>
      {state.message === "success" ? (
        <Card className="card card-dashboard ">
          <h6 className="card-title">Account Summary</h6>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.success}>
                  <Wallet />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${fn.numberFormat(state.payload.balance)} NGN`}
                secondary="Total Collection"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.info}>
                  <Disbursement />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${fn.numberFormat(state.payload.amountRefunded)} NGN`}
                secondary="Total Disbursement "
              />
            </ListItem>
          </List>
        </Card>
      ) : (
        <Loader />
      )}
      <Alert
        open={state.open}
        msg={state.message}
        type={state.type}
        onClose={handleClose}
      />
    </>
  );
}
