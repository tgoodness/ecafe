import React from "react";
import Alert from "../Alert-Black";
import Input from "../Input";
import Select from "../Select";
import { Button } from "../Button";
import Card from "@material-ui/core/Card";
//

import transferHandler from "../../core/transfer-fund/handler";
import transferFund from "../../core/transfer-fund/transfer-fund";
import Banks from "../../core/transfer-fund/banks";
import { Preloader } from "../preloader/Preloader";

export const Transfer = () => {
  
  const [
    bankName,
    handleBankName,
    accountNumber,
    handleAccountNumber,
    stateVA,
    accountNameVA,
    paymentReference,
    handlePaymentReference,
    handleCloseVA,
  ] = transferHandler();

  const [state] = Banks();


  const [stateTF, handleSubmit, handleCloseTF] = transferFund(
    paymentReference.value,
    "registrationId",
    accountNumber.value,
    bankName.value
  );


  return (
    <Card className="card">
      <div className="card-body">
        <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
          <Select
            label="Bank Name"
            name="bankName"
            value={bankName.value || ""}
            onChange={handleBankName}
            error={bankName.error}
            helperText={bankName.helperText}
            items={state.payload}
          />
          <Input
            type="number"
            label="Account Number"
            name="accountNumber"
            value={accountNumber.value || ""}
            onChange={handleAccountNumber}
            error={accountNumber.error}
            helperText={accountNumber.helperText}
          />
          <Input
            type="text"
            label="Account Name"
            name="accountNumber"
            value={accountNameVA}
            error={false}
            disabled={true}
          />
          <Input
            type="text"
            label="Payment Ref"
            name="paymentRef"
            value={paymentReference.value || ""}
            onChange={handlePaymentReference}
            error={paymentReference.error}
            helperText={paymentReference.helperText}
          />

          <p className="text-center mt-3">
            <Button label="Refund" loading={stateTF.loading} />
          </p>
        </form>
      </div>
      <Alert
        open={stateVA.open}
        msg={stateVA.message}
        onClose={handleCloseVA}
      />

      <Alert
        open={stateTF.open}
        msg={stateTF.message}
        onClose={handleCloseTF}
      />
      {stateVA.loading && <Preloader />}
      {state.loading && <Preloader />}
    </Card>
  );
};
