import { useState } from "react";
import Verify from "./verify-account-number";
function Handler() {
  const [stateVA, verifyAccount, accountNameVA, handleCloseVA] = Verify();
  //BANK NAME
  const [bankName, setBankName] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handleBankName = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setBankName({
        value: value,
        helperText: "",
        error: false,
      });

      verifyAccount(accountNumber.value, value, reset);
    } else {
      setBankName({
        helperText: "This field is required",
        error: true,
      });
    }
  };

  //ACCOUNT NUMBER
  const [accountNumber, setAccountNumber] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  //ACCOUNT NUMBER
  const handleAccountNumber = (e) => {
    const value = e.target.value;

    if (value.length === 10) {
      setAccountNumber({
        value: value,
        helperText: "",
        error: false,
      });

      verifyAccount(value, bankName.value, reset);
    } else {
      if (value === "") {
        setAccountNumber({
          helperText: "This field is required",
          error: true,
          value: value,
        });
      } else {
        setAccountNumber({
          helperText: "Account number is not valid",
          error: true,
          value: value,
        });
      }
    }
  };

  //PAYMENT REFERENCE
  const [paymentReference, SetPaymentReference] = useState({
    value: "",
    error: false,
    helperText: "",
  });

  const handlePaymentReference = (e) => {
    const value = e.target.value;

    if (value !== "") {
      SetPaymentReference({
        value: value,
        helperText: "",
        error: false,
      });
    } else {
      SetPaymentReference({
        helperText: "This field is required",
        error: true,
      });
    }
  };

  //Clear account number if verification failed
  const reset = () => {
    setAccountNumber({
      value: "",
    }); 

  };

  return [
    bankName,
    handleBankName,
    accountNumber,
    handleAccountNumber,
    stateVA,
    accountNameVA,
    paymentReference,
    handlePaymentReference,
    handleCloseVA,
  ];
}

export default Handler;
