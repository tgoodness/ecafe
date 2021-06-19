import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="page-not-found fixed-center">
      <h1>
        <img
          src="img/app/404.png"
          alt="Not Found"
          width="300"
          className="img-fluid "
        />
      </h1>
      <h4>Sorry, Page not found</h4>
      <Link to="/" className="btn btn-danger mt-3">
        Go To Home
      </Link>
    </div>
  );
};

export const InternalServerError = () => {
  return (
    <div className="page-not-found fixed-center">
      <h1>
        <img
          src="/img/500.png"
          alt="Not Found"
          width="300"
          className="img-fluid "
        />
      </h1>
      <h4>Sorry, it's not you its us</h4>
      <h6>
        We're experiencing an internal server error. <br /> please try again
        later.
      </h6>
    </div>
  );
};
