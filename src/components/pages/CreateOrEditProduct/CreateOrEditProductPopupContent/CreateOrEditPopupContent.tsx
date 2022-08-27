import React, { FC } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { ButtonTypes } from "../../../../types/types";
import { ProductsForm } from "../ProductsForm/ProductsForm";
import "./CreateOrEditPopupContent.scss";

Modal.setAppElement("#root");

interface CreateOrEditPopupContentProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  itemId?: number;
}

export const CreateOrEditPopupContent: FC<CreateOrEditPopupContentProps> = ({
  isOpen,
  setIsOpen,
  itemId
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: {
          background: "rgba(0,0,0, .85)"
        },
        content: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "8px",
          background: "#fff",
          width: "25%",
          height: "520px",
          padding: "36px",
          overflow: "hidden"
        }
      }}
    >
      <div className="productsCreationEditionPopupContent">
        <ProductsForm itemId={itemId} setIsOpen={setIsOpen} />
        <button
          className="floatingCloseButton"
          onClick={() => setIsOpen(false)}
          type={ButtonTypes.Button}
        >
          <IoMdClose className="closeIcon" />
        </button>
      </div>
    </Modal>
  );
};
