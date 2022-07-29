import { Tooltip } from "@material-ui/core";
import React, { FC } from "react";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./EditProductButton.scss";

interface EditProductButtonProps {
  itemId: number;
}

export const EditProductButton: FC<EditProductButtonProps> = ({ itemId }) => {
  return (
    <Tooltip title="Editar producto">
      <Link to={`/editProduct/${itemId}`} className="editProductButton">
        <BiEditAlt className="icon" />
      </Link>
    </Tooltip>
  );
};
