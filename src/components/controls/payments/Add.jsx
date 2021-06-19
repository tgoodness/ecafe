import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";

//
import Input from "../Input";

import { Button } from "../Button";
import Alert from "../Alert-Black";
import addHandler from "../../core/payments/handler/add";
import AddPayment from "../../core/payments/add";

const AddSchool = (props) => {
  const { values, handleCancel } = props;
  const [
    paymentType,
    handlePaymentType,
    amount,
    handleAmount,
    charges,
    handleCharges,
  ] = addHandler();

  const params = useParams();
  const [state, handleAdd, handleClose] = AddPayment(
    paymentType.value,
    amount.value,
    charges.value,
    params.schoolId,
    handleCancel
  );

  return (
    <>
      <Modal
        visible={values.visible}
        title="Add Payment"
        footer={false}
        onCancel={handleCancel}
      >
        <form onSubmit={handleAdd}>
          <Input
            type="text"
            label="Payment Type"
            value={paymentType.value}
            onChange={handlePaymentType}
            error={paymentType.error}
            helperText={paymentType.helperText}
          />

          <Input
            type="number"
            label="Amount"
            value={amount.value}
            onChange={handleAmount}
            error={amount.error}
            helperText={amount.helperText}
          />

          <Input
            type="number"
            label="Charges"
            value={charges.value}
            onChange={handleCharges}
            error={charges.error}
            helperText={charges.helperText}
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
