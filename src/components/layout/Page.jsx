import React from "react";
import "../sass/style/style.css";
import "../sass/responsive/style.css";
import "../sass/preloader/style.css";
import Menu from "./Menu";

export const Page = ({title, children }) => {
  return <div className="container"><Menu title={title}>{children}</Menu></div>;
};
