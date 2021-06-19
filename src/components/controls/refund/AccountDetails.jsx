import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import accountBalance from "../../core/transfer-fund/account-balance";

//
import Loader from "./Loader";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  icon: {
    color: "#3a3a3a",
    background: "#F2F2F2",
  },
  green: {
    color: "#0CE221",
    background: "rgba(12,226,33,0.2)",
  },
}));

export default function InteractiveList() {
  const classes = useStyles();
  const [state] = accountBalance();
  return (
    <>
     
        <div className={classes.root}>
          <Card className="card mt-3">
            <div className="card-body">
              <h6 className="card-title mb-4">Account Details</h6>
              { !state.success ?
                <Loader /> :
                <Grid item xs={ 12 } md={ 12 }>
                  <div className={ classes.demo }>
                    <List>
                      <ListItem className="acbgdanger">
                        <ListItemAvatar>
                          <Avatar className={ classes.green }>
                            <img
                              src="/img/logo/ngn.png"
                              alt="Nigeria Logo"
                              className="img-fluid"
                            />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={ `${state.payload.balance} NGN` }
                          secondary="Total Wallet Balance"
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemText primary="FCMB" />
                        <ListItemSecondaryAction>
                          0 <span>4160780012</span>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider className="mt-2" />
                      <ListItem>
                        <ListItemText primary="AKINYEMI TOBILOBA O." />
                        <button className="btn ">
                          <span className="text-danger">Fund It</span>
                        </button>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              }
            </div>
          </Card>
        </div>
    
    </>
  );
}
