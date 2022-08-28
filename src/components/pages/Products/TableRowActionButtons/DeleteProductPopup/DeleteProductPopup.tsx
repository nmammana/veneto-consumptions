import { Tooltip } from "@material-ui/core";
import React, { FC, useState } from "react";
import Modal from "react-modal";
import { AiOutlineDelete } from "react-icons/ai";
import "./DeleteProductPopup.scss";
import { CancellationConfirmationPopup } from "../../../../common/CancellationConfirmationPopup/CancellationConfirmationPopup";

Modal.setAppElement("#root");

interface DeleteProductButtonProps {
  itemId: number;
  deleteItem: (itemId: number) => void;
}

export const DeleteProductPopup: FC<DeleteProductButtonProps> = ({
  itemId,
  deleteItem
}) => {
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);

  return (
    <>
      <Tooltip title="Eliminar producto">
        <button
          className="deleteItemButton"
          onClick={() => {
            setIsDeletePopupOpen(true);
          }}
        >
          <AiOutlineDelete className="icon" />
        </button>
      </Tooltip>
      <CancellationConfirmationPopup
        isOpen={isDeletePopupOpen}
        setIsOpen={setIsDeletePopupOpen}
        title="Eliminar producto?"
        primaryButtonText="Si"
        onPrimaryButtonClick={() => {
          deleteItem(itemId);
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
