import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Item from './ListItem';

import {
  LayersOutlined,
  SendOutlined,
  SwapHorizontalCircleOutlined,
  CloudDoneOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: 'white',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          HISTORIES
        </ListSubheader>
      }
      className={classes.root}
    >
      <Item title="Trade Crypto" to="/trade-crypto" icon={<LayersOutlined />} />
      <Item title="P2P" to="/p2p" icon={<SwapHorizontalCircleOutlined />} />
      <Item title="Transfer" to="/transfer" icon={<SendOutlined />} />
      <Item title="Receive" to="/receive" icon={<CloudDoneOutlined />} />
    </List>
  );
}
