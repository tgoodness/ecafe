import React from "react";
import "../style/onboard/style.css";
import "../style/onboard/responsive.css";
import "../sass/preloader/style.css";
import  Animation  from '../controls/Animation';
export const Wrapper = ({ children }) => {
  
  return (
    <div className="wrapper">
      <div className="container onboard-logo">
        <img src="/img/app/ecafe.png" alt="Logo" width="80" className="mt-4" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <Animation>{children}</Animation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
