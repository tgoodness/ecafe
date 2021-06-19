import { useState } from "react";

function EditSchoolHandler(data) {
  const [paymentType, setPaymentType] = useState({
    value: data.type,
    error: false,
    helperText: "",
  });

  const handlePaymentType = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setPaymentType({
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      setPaymentType({
        value: value,
        helperText: "Payment type can not be empty",
        error: true,
      });
    }
  };

  const [amount, setAmount] = useState({
    value: data.amount,
    error: false,
    helperText: "",
  });

  const handleAmount = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setAmount({
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      setAmount({
        value: value,
        helperText: "Amount can not be empty",
        error: true,
      });
    }
  };

  const [charges, setCharges] = useState({
    value: data.charges,
    error: false,
    helperText: "",
  });
  

  const handleCharges = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setCharges({
        value: value,
        error: false,
        helperText: "",
      });
    } else {
      setCharges({
        value: value,
        helperText: "Charges can not be empty",
        error: true,
      });
    }
  };




  return [
    paymentType,
    handlePaymentType,
    amount,
    handleAmount,
    charges,
    handleCharges,
  ];
}

export default EditSchoolHandler;
