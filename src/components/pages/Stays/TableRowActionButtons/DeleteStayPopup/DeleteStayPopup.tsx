import { Tooltip } from "@material-ui/core";
import React, { FC, useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import "./DeleteStayPopup.scss";
import { CancellationConfirmationPopup } from "../../../../common/CancellationConfirmationPopup/CancellationConfirmationPopup";

interface DeleteStayButtonProps {
  stayId: number;
  deleteStay: (stayId: number) => void;
}

export const DeleteStayPopup: FC<DeleteStayButtonProps> = ({
  stayId,
  deleteStay
}) => {
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);

  const onDeleteStayClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDeletePopupOpen(true);
  };

  return (
    <>
      <Tooltip title="Eliminar estadía">
        <button className="deleteStayButton" onClick={onDeleteStayClick}>
          <AiOutlineDelete className="icon" />
        </button>
      </Tooltip>
      <CancellationConfirmationPopup
        isOpen={isDeletePopupOpen}
        setIsOpen={setIsDeletePopupOpen}
        title="Eliminar estadía?"
        primaryButtonText="Si"
        onPrimaryButtonClick={() => {
          deleteStay(stayId);
          setIsDeletePopupOpen(false);
        }}
        secondaryButtonText="No"
        onSecondaryButtonClick={() => {
          setIsDeletePopupOpen(false);
        }}
      />
    </>
  );
};
