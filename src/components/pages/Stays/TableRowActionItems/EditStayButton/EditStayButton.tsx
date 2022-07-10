import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./EditStayButton.scss";

export const EditStayButton = () => {
  return (
    <Link to="/editStay" className="editStayButton">
      <BiEditAlt />
    </Link>
  );
};
