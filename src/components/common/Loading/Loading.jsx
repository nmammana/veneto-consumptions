import React from "react";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
