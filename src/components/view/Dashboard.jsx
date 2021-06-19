import React from "react";
import { Page } from "../layout/Page";

import AccountSummary from "../controls/dashboard/Account-Summary";
import Analysis from "../controls/dashboard/System-Analysis";


function Dashboard() {
  return (
    <Page title="Dashboard">
      <div className="row">
        <div className="col-md-7">
          <Analysis />
        </div>
        <div className="col-md-5 mb-2">
          <AccountSummary />
        </div>
      </div>
    </Page>
  );
};

export default Dashboard
