import React, { useContext } from "react";
import "./Header.scss";
import organizationLogo from "../../../../assets/images/Logo.png";
import { HeaderToolbar } from "./HeaderToolbar/HeaderToolbar";
import { AuthContext } from "../../../context/AuthContext";

export const Header = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className="headerWrapper">
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={organizationLogo} alt="Organization logo" />
        </div>
        {authContext?.authState.authenticated && <HeaderToolbar />}
      </div>
    </div>
  );
};
