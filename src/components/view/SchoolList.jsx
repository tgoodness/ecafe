import React from "react";
import { Page } from "../layout/Page";

import SchoolLists from '../controls/schools/Schools';
function SchoolList() {
  return (
    <Page title="Schools">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <SchoolLists />
        </div>
      </div>
    </Page>
  );
}

export default SchoolList;
