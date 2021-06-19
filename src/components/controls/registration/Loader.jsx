import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";


const One = () => {
  return (
    <div className="card pt-4 pb-4 mt-2">
      <div className="d-flex">
        <Skeleton className="mr-3" variant="circle" width={50} height={50} />
        <Skeleton variant="rect" style={{ width: "100%" }} height={45} />
      </div>

      <div className="d-flex mt-2">
        <Skeleton className="mr-3" variant="circle" width={50} height={50} />
        <Skeleton variant="rect" style={{ width: "100%" }} height={45} />
      </div>

      <div className="d-flex mt-2">
        <Skeleton className="mr-3" variant="circle" width={50} height={50} />
        <Skeleton variant="rect" style={{ width: "100%" }} height={45} />
      </div>

      <div className="d-flex mt-2">
        <Skeleton className="mr-3" variant="circle" width={50} height={50} />
        <Skeleton variant="rect" style={{ width: "100%" }} height={45} />
      </div>
    </div>
  );
};

export default function Loader() {
  return (
    <div className="row">
      <div className="col-md-12">
        <One />
      </div>
    </div>
  );
}
