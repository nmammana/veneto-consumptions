import React, { FC } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { ButtonTypes } from "../../../types/types";
import { ButtonSmall } from "../buttons/ButtonSmall/ButtonSmall";
import "./CancellationConfirmationPopup.scss";

Modal.setAppElement("#root");

interface CancellationConfirmationPopupProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  primaryButtonText: string;
  onPrimaryButtonClick?: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
  title: string;
  className?: string;
}

export const CancellationConfirmationPopup: FC<
  CancellationConfirmationPopupProps
> = ({
  isOpen,
  setIsOpen,
  primaryButtonText,
  onPrimaryButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick,
  title,
  className
}) => {
  return (
    <Modal
      className={className}
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
          width: "28%",
          height: "240px",
          padding: "32px",
          overflow: "hidden"
        }
      }}
    >
      <div className="popupContent">
        <div className="popupHeader">
          <p className="popupTitle">{title}</p>
        </div>
        <div className="actionButtonsContainer">
          <ButtonSmall
            onClick={onPrimaryButtonClick}
            className="actionButton"
            text={primaryButtonText}
            type={ButtonTypes.Button}
          />
          {secondaryButtonText && (
            <ButtonSmall
              onClick={onSecondaryButtonClick}
              className="actionButton"
              text={secondaryButtonText}
              type={ButtonTypes.Button}
            />
          )}
        </div>
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
