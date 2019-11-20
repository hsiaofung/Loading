import React from "react";
import "./css/loading.css";

export default props => {
  const { show, type } = props;
  return (
    (show && (
      <div
        className={
          type === "fullPage" ? "loading-content-full-page" : "loading-content"
        }
      >
        <div className={"loading-center"}></div>
      </div>
    )) ||
    null
  );
};
