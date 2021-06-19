import React from "react";
import { Page } from "../layout/Page";
import PaymentLists from "../controls/payments/Payments";
function PaymentList() {
  return (
    <Page title="Payments">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <PaymentLists />
        </div>
      </div>
    </Page>
  );
}

export default PaymentList;
