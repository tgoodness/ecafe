import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

//
import Input from "../Input";
import { Button } from "../Button";
import Alert from "../Alert-Black";
import EditSchools from "../../core/schools/edit";

const EditSchool = (props) => {
  const { data, values, handleCancel } = props;
  const [schoolName, state, handleEdit, handleClose] = EditSchools(
    data.schoolId,
    handleCancel
  );

  return (
    <>
      <Modal
        visible={values.visible}
        title="Edit School"
        footer={false}
        onCancel={handleCancel}
      >
        <form onSubmit={handleEdit}>
          <Input
            type="text"
            label="School Name"
            inputRef={schoolName}
            defaultValue={data.schoolName}
          />
          <p className="text-center">
            <Button label="Edit Now" loading={state.loading} />
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

export default EditSchool;
