import React from "react";

import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function ListItemLink(props) {
  const { icon, title, to, ...rest } = props;
  return (
    <NavLink to={to} exact activeClassName="menu-selected" {...rest}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </NavLink>
  );
}
