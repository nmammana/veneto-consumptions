import { Tooltip } from "@material-ui/core";
import React, { FC } from "react";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./EditStayButton.scss";

interface EditStayButtonProps {
  stayId: number;
}

export const EditStayButton: FC<EditStayButtonProps> = ({ stayId }) => {
  return (
    <Tooltip title="Editar estadía">
      <Link to={`/editStay/${stayId}`} className="editStayButton">
        <BiEditAlt className="icon" />
      </Link>
    </Tooltip>
  );
};
