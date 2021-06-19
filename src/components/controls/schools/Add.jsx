import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

//
import Input from "../Input";
import { Button } from "../Button";
import Alert from "../Alert-Black";
import SchoolNameHandler from "../../core/schools/add-school-handler";
import AddSchools from "../../core/schools/add";

const AddSchool = (props) => {
  const { values, handleCancel } = props;
  const [schoolName, handleSchoolName] = SchoolNameHandler();
  const [state, handleAdd, handleClose] = AddSchools(
    schoolName.value,
    handleCancel
  );

  return (
    <>
      <Modal
        visible={values.visible}
        title="Add School"
        footer={false}
        onCancel={handleCancel}
      >
        <form onSubmit={handleAdd}>
          <Input
            type="text"
            label="School Name"
            value={schoolName.value}
            onChange={handleSchoolName}
            error={schoolName.error}
            helperText={schoolName.helperText}
          />
          <p className="text-center">
            <Button label="Add Now" loading={state.loading} />
          </p>
        </form>
      </Modal>
      <Alert
        open={state.open}
        msg={state.message}
        type={state.type}
        onClose={handleClose}
      />
    </>
  );
};

export default AddSchool;
