import { Tooltip } from "@material-ui/core";
import React, { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./DeleteStayButton.scss";

interface DeleteStayButtonProps {
  itemId: number;
  deleteItem: (itemId: number) => void;
}

export const DeleteStayButton: FC<DeleteStayButtonProps> = ({
  itemId,
  deleteItem
}) => {
  return (
    <Tooltip title="Eliminar estadía">
      <button className="deleteStayButton" onClick={() => deleteItem(itemId)}>
        <AiOutlineDelete className="icon" />
      </button>
    </Tooltip>
  );
};
