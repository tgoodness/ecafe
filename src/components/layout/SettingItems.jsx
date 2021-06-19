import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Logout from "@material-ui/icons/PowerSettingsNewOutlined";
import Security from "@material-ui/icons/LockOpenOutlined";
import Item from "./ListItemLink";
import auth from "../config/Auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: "white",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const history = useHistory();
  const handleLogout = () => {
    auth.logout(() => {
      history.replace("/");
    });
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          SETTINGS
        </ListSubheader>
      }
      className={classes.root}
    >
      <Item title="Security" to="/security" icon={<Security />} />
      <Item title="Logout" to="/" icon={<Logout />} onClick={handleLogout} />
    </List>
  );
}
