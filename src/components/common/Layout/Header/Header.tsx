import React from "react";
import "./Header.scss";
import organizationLogo from "../../../../assets/images/Logo.png";
import { HeaderToolbar } from "./HeaderToolbar/HeaderToolbar";

export const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={organizationLogo} alt="Organization logo" />
        </div>
        <HeaderToolbar />
      </div>
    </div>
  );
};
