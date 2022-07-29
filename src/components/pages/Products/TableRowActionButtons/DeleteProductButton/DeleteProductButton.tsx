import { Tooltip } from "@material-ui/core";
import React, { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./DeleteProductButton.scss";

interface DeleteProductButtonProps {
  itemId: number;
  deleteItem: (itemId: number) => void;
}

export const DeleteProductButton: FC<DeleteProductButtonProps> = ({
  itemId,
  deleteItem
}) => {
  return (
    <Tooltip title="Eliminar producto">
      <button className="deleteStayButton" onClick={() => deleteItem(itemId)}>
        <AiOutlineDelete className="icon" />
      </button>
    </Tooltip>
  );
};
