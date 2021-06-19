import React from "react";
import { Modal } from "antd";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "antd/dist/antd.css";
import { Card } from "@material-ui/core";
import ms from "../../services/misc";
import fn from "../../services/func";

const PaymentDetails = (props) => {
  const { values, handleCancel, row } = props;
  return (
    <>
      <Modal
        visible={values.visible}
        title="Payment Details"
        footer={false}
        onCancel={handleCancel}
        width={800}
      >
        {fn.isObj(row) && (
          <div className="row mt-4">
            <div className="col-md-6  mb-3">
              <Card className="card">
                <h6 className="pyh-details">Bio Data</h6>
                <Divider />
                <div className="row">
                  <div className="col-md-6">
                    <ListItem>
                      <ListItemText
                        primary={row.schoolName}
                        secondary="School Name"
                      />
                    </ListItem>
                  </div>
                  <div className="col-md-6">
                    <ListItem>
                      <ListItemText
                        primary={row.matricNumber}
                        secondary="Matric Number"
                      />
                    </ListItem>
                  </div>
                </div>

                <Divider />
                <div className="row">
                  <div className="col-md-6">
                    <ListItem>
                      <ListItemText
                        primary={row.paymentType}
                        secondary="Payment Type"
                      />
                    </ListItem>
                  </div>
                  <div className="col-md-6">
                    <ListItem>
                      <ListItemText
                        primary={row.phoneNumber}
                        secondary="Phone Number"
                      />
                    </ListItem>
                  </div>

                  <Divider />
                  <div className="row">
                    <div className="col-md-6">
                      <ListItem>
                        <ListItemText
                          primary={row.email}
                          secondary="Email Address"
                        />
                      </ListItem>
                    </div>
                    <div className="col-md-6">
                      <ListItem>
                        <ListItemText
                          primary={row.fullName}
                          secondary="Email Address"
                        />
                      </ListItem>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6">
              <Card className="card">
                <h6 className="pyh-details">Payment Info</h6>
                <Divider />
                <div className="row">
                  <div className="col-md-6">
                    <ListItem>
                      <ListItemText
                        primary={row.paymentReference}
                        secondary="Payment Ref"
                      />
                    </ListItem>
                  </div>
                  <div className="col-md-6">
                    <ListItem>
                      <ListItemText
                        primary={
                          <span className="badge badge-success">
                            &#x20A6; {fn.numberFormat(row.amount)}
                          </span>
                        }
                        secondary="AMOUNT"
                      />
                    </ListItem>
                  </div>
                </div>

                <Divider />
                <div className="row">
                  <div className="col-md-6">
                    <ListItem>
                      <ListItemText
                        primary={
                          <span className="badge badge-success">
                            {ms.paymentStatus(row.paid)}
                          </span>
                        }
                        secondary="Payment Status"
                      />
                    </ListItem>
                  </div>
                  <div className="col-md-6">
                    <ListItem>
                      <ListItemText
                        primary={row.bankName}
                        secondary="Payment Type"
                      />
                    </ListItem>
                  </div>

                  <Divider />
                  <div className="row">
                    <div className="col-md-6">
                      <ListItem>
                        <ListItemText
                          primary={row.accountNumber}
                          secondary="Acct Number"
                        />
                      </ListItem>
                    </div>
                    <div className="col-md-6">
                      <ListItem>
                        <ListItemText
                          primary={row.accountName}
                          secondary="Account Name"
                        />
                      </ListItem>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default PaymentDetails;
