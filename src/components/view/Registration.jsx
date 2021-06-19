import React from "react";
import { Page } from "../layout/Page";
import Tab from "../controls/registration/Tab";
//
import Registrations from "../core/registration/registration";
import Alert from "../controls/Alert-Black";

export const RegistrationContext = React.createContext();
function Registration() {
  const [state, handleClose] = Registrations("rebuild");

  return (
    <Page title="Registration">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <RegistrationContext.Provider value={state}>
            <Tab />
          </RegistrationContext.Provider>

          <Alert
            open={state.open}
            msg={state.message}
            type={state.type}
            onClose={handleClose}
          />
        </div>
      </div>
    </Page>
  );
};

export default Registration