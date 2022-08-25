import { Tooltip } from "@material-ui/core";
import React, { FC, useState } from "react";
import Modal from "react-modal";
import { BiEditAlt } from "react-icons/bi";
import { ButtonTypes } from "../../../../../types/types";
import "./EditProductPopup.scss";
import { CreateOrEditPopupContent } from "../../../CreateOrEditProduct/CreateOrEditProductPopupContent/CreateOrEditPopupContent";

Modal.setAppElement("#root");

interface EditProductPopupProps {
  itemId: number;
}

export const EditProductPopup: FC<EditProductPopupProps> = ({ itemId }) => {
  const [isProductEditionPopupOpen, setIsProductEditionPopupOpen] =
    useState<boolean>(false);

  const onEditProductClick = () => {
    setIsProductEditionPopupOpen(true);
  };

  return (
    <div className="editProductPopup">
      <Tooltip title="Editar producto">
        <button
          type={ButtonTypes.Button}
          className="editProductButton"
          onClick={onEditProductClick}
        >
          <BiEditAlt className="icon" />
        </button>
      </Tooltip>

      <CreateOrEditPopupContent
        isOpen={isProductEditionPopupOpen}
        setIsOpen={setIsProductEditionPopupOpen}
        itemId={itemId}
      />
    </div>
  );
};
