import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { Card, IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Add from "@material-ui/icons/Add";
import ArrowDown from "@material-ui/icons/DoubleArrowSharp";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import More from "@material-ui/icons/KeyboardArrowRight";
//
import Alert from "../Alert-Black";
import AddSchool from "./Add";
import EditSchool from "./Edit";
import DeleteSchool from "./Delete";
import PaymentLists from "../../core/payments/list";
import Loader from "./Loader";
import fn from "../../services/func";

function PaymentList() {
  const params = useParams();

  //Modal
  const [values, setValues] = useState({
    loadin: false,
    visible: false,
  });

  const showModal = () => {
    setValues({ ...values, visible: true });
  };

  const handleCancel = () => {
    setValues({ visible: false });
  };

  //Edit Modal
  const [valuesE, setValuesE] = React.useState({
    loadin: false,
    visible: false,
  });

  const [edit, setEdit] = useState({ id: "", type: "", amount: "",  charges: "" });

  const showModalE = (e) => {

    let data = e.currentTarget.id;
    data = data.split("&");
    
    setEdit({ id: data[0], type: data[1], amount: data[2], charges: data[3] });
    setValuesE({ ...values, visible: true });
  };

  const handleCancelE = () => {
    setValuesE({ visible: false });
  };

  //Delete payment
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleClickOpen = (e) => {
    setDeleteId(e.currentTarget.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, handleCloseL] = PaymentLists();
  const data = state.payload.filter((p) => p.schoolId === params.schoolId);

  return (
    <>
      <div className="text-right">
        <IconButton
          style={{ background: "#ECECEC", color: "#DB3236" }}
          onClick={showModal}
        >
          <Add />
        </IconButton>
      </div>
      {state.message === "success" ? (
        <Card className="school-list card pl-4 p-4">
          {data.length > 0 ? (
            <div className="table-responsive">
              <h5 className="mb-3">{fn.upperCase(params.schoolName)}</h5>
              <table className="table">
                <thead className="tableHead">
                  <tr>
                    <th>#</th>
                    <th>Payment Type</th>
                    <th>Amount</th>
                    <th>Charges</th>
                    <th>Action</th>
                    <th>More</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((items) => {
                    return items.payments.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <Avatar className="avater">
                              <ArrowDown />
                            </Avatar>
                          </td>
                          <td>{item.paymentType}</td>
                          <td>{item.amount}</td>
                          <td>{item.charges}</td>
                          <td>
                            <Edit
                              className="edit"
                              id={`${item.id}&${item.paymentType}&${item.amount}&${item.charges}`}
                              onClick={showModalE}
                            />

                            <Delete
                              className="delete"
                              id={item.id}
                              onClick={handleClickOpen}
                            />
                          </td>
                          <td>
                            <Link to="/schools">
                              <More className="more" />
                            </Link>
                          </td>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="m-4 text-center">
              <img
                src="/img/app/empty-record.png"
                with="200"
                alt="Empty Record"
              />
            </p>
          )}
        </Card>
      ) : (
        <Loader />
      )}

      <AddSchool values={values} handleCancel={handleCancel} />
      <EditSchool values={valuesE} handleCancel={handleCancelE} data={edit} />
      <DeleteSchool open={open} handleClose={handleClose} id={deleteId} />

      <Alert
        open={state.open}
        msg={state.message}
        type={state.type}
        onClose={handleCloseL}
      />
    </>
  );
}

export default PaymentList;
