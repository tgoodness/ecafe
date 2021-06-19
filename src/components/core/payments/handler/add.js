import { useState } from "react";

function AddSchoolHandler() {

  const [paymentType, setPaymentType] = useState({
    value: "",
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
     value: "",
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
      value: "",
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



  return [paymentType, handlePaymentType,amount, handleAmount, charges, handleCharges];
}

export default AddSchoolHandler;
