import React, { useState } from "react";
import Modal from "react-modal";
import { AddButton } from "../../../common/buttons/AddButton/AddButton";
import { CreateOrEditPopupContent } from "../../CreateOrEditProduct/CreateOrEditProductPopupContent/CreateOrEditPopupContent";
import "./CreateProductPopup.scss";

Modal.setAppElement("#root");

export const CreateProductPopup = () => {
  const [isProductCreationPopupOpen, setIsProductCreationPopupOpen] =
    useState<boolean>(false);

  const onCreateProductClick = () => {
    setIsProductCreationPopupOpen(true);
  };

  return (
    <div className="createProductPopup">
      <AddButton
        onClick={() => onCreateProductClick()}
        className="floatingButton"
      />
      <CreateOrEditPopupContent
        isOpen={isProductCreationPopupOpen}
        setIsOpen={setIsProductCreationPopupOpen}
      />
    </div>
  );
};
