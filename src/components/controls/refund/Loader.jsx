import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const AccountDetails = () => {
  return (
    <div className="card pt-4 pb-4 mt-2">
      <div className="d-flex">
        <Skeleton variant="rect" style={{ width: "100%" }} height={45} />
      </div>

      <div className="d-flex mt-2">
        <Skeleton variant="rect" style={{ width: "100%" }} height={60} />
      </div>

      <div className="d-flex mt-2">
        <Skeleton variant="rect" style={{ width: "100%" }} height={60} />
      </div>
    
    </div>
  );
};

export default function Loader() {
  return (
    <div className="row">
      <div className="col-md-12">
        <AccountDetails />
      </div>
    </div>
  );
}
