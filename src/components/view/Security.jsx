import React from "react";
import { Page } from "../layout/Page";
import Tab from "../controls/security/Tab";

function Security  ()  {
  return (
    <Page title="Settings">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <Tab />
        </div>
      </div>
    </Page>
  );
};

export default Security