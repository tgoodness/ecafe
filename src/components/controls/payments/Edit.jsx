import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

//
import Input from "../InputDefault";
import { Button } from "../Button";
import Alert from "../Alert-Black";
import EditSchools from "../../core/payments/edit";

const EditSchool = (props) => {
  const { data, values, handleCancel } = props;

  const [
    paymentType,
    amount,
    charges,
    state,
    handleEdit,
    handleClose,
  ] = EditSchools(data.id, handleCancel);

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
            label="Payment type"
            type="text"
            defaultValue={data.type}
            inputRef={paymentType}
          />
          <Input
            label="Amount"
            type="number"
            defaultValue={data.amount}
            inputRef={amount}
          />
          <Input
            label="Charges"
            type="number"
            defaultValue={data.charges}
            inputRef={charges}
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
