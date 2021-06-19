import React, { useState } from "react";
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
import SchoolLists from "../../core/schools/list";
import Loader from "./Loader";

function Schools() {
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

  const [edit, setEdit] = useState({ schoolName: "", schoolId: "" });

  const showModalE = (e) => {
    var data = e.currentTarget.id;
    data = data.split("&");
    setEdit({ schoolId: data[0], schoolName: data[1] });
    setValuesE({ ...values, visible: true });
  };

  const handleCancelE = () => {
    setValuesE({ visible: false });
  };

  //Delete
  const [open, setOpen] = useState(false);
  const [deleteSchoolId, setDeleteSchoolId] = useState("");

  const handleClickOpen = (e) => {
    setDeleteSchoolId(e.currentTarget.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, handleCloseL] = SchoolLists();

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
        <Card className="school-list card">
          {state.payload.length > 0 ? (
            <div className="table-responsive">
              <table className="table">
                <thead className="tableHead">
                  <tr>
                    <th>#</th>
                    <th>School ID</th>
                    <th>School Name</th>
                    <th>Date Added</th>
                    <th>Action</th>
                    <th>More</th>
                  </tr>
                </thead>
                <tbody>
                  {state.payload.map((item) => {
                    return (
                      <tr key={item.schoolId}>
                        <td>
                          <Avatar className="avater">
                            <ArrowDown />
                          </Avatar>
                        </td>
                        <td>{item.schoolId}</td>
                        <td>{item.schoolName}</td>
                        <td>{item.dateAdded}</td>
                        <td>
                          <Edit
                            className="edit"
                            id={`${item.schoolId}&${item.schoolName}`}
                            onClick={showModalE}
                          />
                          <Delete
                            className="delete"
                            id={item.schoolId}
                            onClick={handleClickOpen}
                          />
                        </td>
                        <td>
                          <Link
                            to={`/payments/${item.schoolId}/${item.schoolName}`}
                          >
                            <More className="more" />
                          </Link>
                        </td>
                      </tr>
                    );
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
      <DeleteSchool
        open={open}
        handleClose={handleClose}
        schoolId={deleteSchoolId}
      />

      <Alert
        open={state.open}
        msg={state.message}
        type={state.type}
        onClose={handleCloseL}
      />
    </>
  );
}

export default Schools;
