import React from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import "./CurrentAccountPopup.scss";

export const CurrentAccountPopup = () => {
  return (
    <Link to="/edit" className="currentAccountPopup">
      <FiEye />
    </Link>
  );
};
