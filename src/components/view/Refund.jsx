import React  from "react";
import { Page } from "../layout/Page";
import AccountDetails from "../controls/refund/AccountDetails";
import { Transfer } from "../controls/refund/Transfer";


function Refund () {

  return (
    <Page title="Refund">
      <div className="row">
        <div className="offset-md-1 col-md-10">
          <div className="row">
            <div className="col-md-6">
              <AccountDetails />
            </div>
            <div className="col-md-6 mt-3">
              <Transfer />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Refund