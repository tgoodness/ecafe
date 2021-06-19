import React, { useState } from "react";
import { Modal, Button } from "antd";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import "antd/dist/antd.css";
const Moda = () => {
  const [values, setValues] = React.useState({ loadin: false, visible: false });

  const showModal = () => {
    setValues({ ...values, visible: true });
  };

  const handleCancel = () => {
    setValues({ visible: false });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Show
      </Button>
      <Modal
        visible={values.visible}
        title="Transaction Details"
        footer={false}
        onCancel={handleCancel}
        width={800}
      >
        <List className="modal-list">
          <ListItem>
            <ListItemText secondary="AMOUNT" primary="N5484,90.00" />
            <ListItemSecondaryAction>
              <span className="badge badge-info">Paid</span>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="TRANSACTION REF" />
            <ListItemSecondaryAction>
              <b>TX4160780012</b>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />
          <ListItem>
            <ListItemText primary="PAYMENT REF" />
            <ListItemSecondaryAction>
              <b>TX4160780012</b>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />
          <ListItem>
            <ListItemText primary="FEE" />
            <ListItemSecondaryAction>
              <b>N50</b>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />
          <ListItem>
            <ListItemText primary="DESCRIPTION" />
            <ListItemSecondaryAction>
              <b>Deebezt</b>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />
          <ListItem>
            <ListItemText primary="PAYMENT DATE" />
            <ListItemSecondaryAction>
              <b>Jun 30th, 2020 - 1:30 am</b>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider />
          <ListItem>
            <ListItemText primary="PAYMENT METHOD" />
            <ListItemSecondaryAction>
              <span className="badge badge-warning">Debit Card</span>
            </ListItemSecondaryAction>
          </ListItem>

          <Divider className="mt-2" />
          <ListItem>
            <ListItemText
              secondary="3020********"
              primary="From > POLARIS BANK"
            />
            <ListItemSecondaryAction>
              <b>AKINYEMI TOBILOBA O.</b>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Modal>
    </>
  );
};
export default Moda;
