import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import Dashboard from "@material-ui/icons/DashboardSharp";
import Registration from "@material-ui/icons/LayersOutlined";
import Transfer from "@material-ui/icons/SendOutlined";
import School from "@material-ui/icons/SchoolOutlined";
import Header from "./Header";
import Item from "./ListItemLink";
import SettingItems from "./SettingItems";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

import Animation from "../controls/Animation";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "white",
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    padding: "20px",
  },
}));

withStyles({
  active: {
    backgroundColor: "rgba(255,255,255,0.12)",
  },
});

function Menu(props) {
  const {title, window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <h3 className="text-center mt-2 " style={{ marginBottom: "13px" }}>
        <img src="/img/app/ecafe.png" alt="Logo" width="120" />
      </h3>
      <Divider />

      <List>
        <Item title="Dashboard" to="/dashboard" icon={<Dashboard />} />
        <Item title="Registration" to="/registration" icon={<Registration />} />
        <Item title="Refund" to="/refund" icon={<Transfer />} />
        <Item title="Schools" to="/schools" icon={<School />} />
      </List>

      <Divider />
      <SettingItems />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <CssBaseline />
      <Header title={title} onClick={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Page comes here  */}
        <Animation> {children}</Animation>
      </main>
    </div>
  );
}

export default Menu;
