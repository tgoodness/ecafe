import React from "react";
import { Modal } from "antd";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "antd/dist/antd.css";
import { Card } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Moriz from "@material-ui/icons/MoreHoriz";
//
import Alert from "../../controls/Alert-Black";
import ms from "../../services/misc";
import fn from "../../services/func";
import { Button } from "../Button";
import Decline from "../../core/registration/decline-transaction";
import markAsDone from "../../core/registration/mark-as-done";
import { AutoLoad } from "../../controls/preloader/Preloader";

const PaymentDetails = (props) => {
  const { values, handleCancel, row } = props;
  const admin = fn.getSession("admin", true);

  //Decline transaction
  const formData = new FormData();
  formData.append("paymentReference", row.paymentReference);
  formData.append("operation", "decline");
  formData.append("registrationId", admin.registrationId);
  const [state, handleDecline, handleClose] = Decline(formData, handleCancel);

  //Approve transaction
  const [handleFile, stateM, handleDone, metaData, handleCloseM] = markAsDone(
    row.paymentReference,
    admin.registrationId,
    handleCancel
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    setTimeout(() => {
      setAnchorEl(null);
    }, 2000);
  };

  const handlMenuClose = () => {
    setAnchorEl(null);
    handleDecline();
  };

  return (
    <>
      <Modal
        visible={values.visible}
        title="Payment Details"
        footer={false}
        onCancel={handleCancel}
        width={800}
      >
        <div className="text-right">
          <Moriz aria-haspopup="true" onClick={handleClick} />
        </div>
        {fn.isObj(row) && (
          <div className="row mt-4 ">
            <div className="col-md-6 mb-3">
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
                          <span className={`badge ${ms.statusColor(row.paid)}`}>
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
                        primary={row.paymentType}
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
              <form onSubmit={handleDone}>
                {metaData.length > 0 && (
                  <div className="file-upload-list">
                    <h5>
                      <span className="badge badge-danger">
                        {metaData.length}
                      </span>
                      {metaData.length > 1 ? " Documents" : " Document"}
                    </h5>
                    {metaData.map((item) => {
                      return (
                        <h6 key={fn.randomNumber + item.fileName}>
                          {item.fileName}
                        </h6>
                      );
                    })}
                  </div>
                )}
                <div className="text-center mt-2 mb-2">
                  <label>
                    <img
                      src="/img/app/upload.png"
                      alt="upload icon"
                      width="37"
                      className="img-fluid"
                    />
                    <input
                      type="file"
                      multiple
                      onChange={handleFile}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                <Button
                  className="btn-sm btn btn-danger btn-block"
                  label={<span>Send</span>}
                  loading={stateM.loading}
                />
              </form>
            </div>
          </div>
        )}
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handlMenuClose}>Decline</MenuItem>
        </Menu>
      </Modal>
      {state.loading && <AutoLoad />}
      <Alert open={state.open} msg={state.message} onClose={handleClose} />
      <Alert open={stateM.open} msg={stateM.message} onClose={handleCloseM} />
    </>
  );
};

export default PaymentDetails;
