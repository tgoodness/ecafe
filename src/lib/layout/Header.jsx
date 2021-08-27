import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Avater from '../assets/avater.png';
import AccountMenu from './AccountMenu';
import './style/header.scss';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGow: 1,
  },

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: '#3a3a3a',
      boxShadow: 'none',
    },

    background: '#3a3a3a',
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff',
  },
  supportIcon: {
    color: '#7a7a7a',
  },
  supportButton: {
    background: 'rgba(0,0,0,0.05)',
  },
  menuIcon: {
    color: '#fff',
  },
}));

export default function MenuAppBar(prob) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { title, onClick } = prob;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            className="d-sm-none"
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography variant="h6" id="page-title" className={classes.title}>
            {/* {fn.formatTitle()} */}
            {title}
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <img src={Avater} alt="User" width="30" height="30" className="User Avater" />
            </IconButton>

            <AccountMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
