import React, { FC, useState } from "react";
import { ButtonTypes } from "../../../../../../types/types";
import { CancellationConfirmationPopup } from "../../../../CancellationConfirmationPopup/CancellationConfirmationPopup";
import "./LogoutPopup.scss";

interface LogoutPopupProps {
  onLogoutClick: () => void;
}

export const LogoutPopup: FC<LogoutPopupProps> = ({ onLogoutClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className="button"
        onClick={() => setIsPopupOpen(true)}
        type={ButtonTypes.Button}
      >
        <p className="buttonText">Salir</p>
      </button>
      <CancellationConfirmationPopup
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        title="Desea salir de la cuenta?"
        primaryButtonText="Si"
        onPrimaryButtonClick={() => {
          onLogoutClick();
          setIsPopupOpen(false);
        }}
        secondaryButtonText="No"
        onSecondaryButtonClick={() => {
          setIsPopupOpen(false);
        }}
      />
    </>
  );
};
