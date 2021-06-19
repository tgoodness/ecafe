import React from "react";
//import "../style/Preloader.css";
import WifiOff from "@material-ui/icons/WifiOffOutlined";
export const Preloader = () => {
  return (
    <div id="preloader">
      <div className="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export const AutoLoad = () => {
  return (
    <div className="effect-loader-wrapper" >
      <div>Loading...</div>
    </div>
  );
};

export const NoConnection = () => {
  return (
    <div className="noConnection-wrapper">
      <div className="loading" onClick={() => window.location.reload()}>
        <WifiOff /> Offline, <b>Reload ?</b>
      </div>
    </div>
  );
};
