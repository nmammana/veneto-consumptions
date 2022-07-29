import { Tooltip } from "@material-ui/core";
import React, { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./DeleteStayButton.scss";

interface DeleteStayButtonProps {
  stayId: number;
  deleteStay: (stayId: number) => void;
}

export const DeleteStayButton: FC<DeleteStayButtonProps> = ({
  stayId,
  deleteStay
}) => {
  return (
    <Tooltip title="Eliminar estadía">
      <button className="deleteStayButton" onClick={() => deleteStay(stayId)}>
        <AiOutlineDelete className="icon" />
      </button>
    </Tooltip>
  );
};
