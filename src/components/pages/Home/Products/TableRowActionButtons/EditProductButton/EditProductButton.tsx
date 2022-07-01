import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./EditProductButton.scss";

export const EditProductButton = () => {
  return (
    <Link to="/editStay" className="editStayButton">
      <BiEditAlt />
    </Link>
  );
};
