import React, { FC, useState } from "react";
import { ButtonTypes } from "../../../../types/types";
import { ButtonMiddle } from "../../../common/buttons/ButtonMiddle/ButtonMiddle";
import { CancellationConfirmationPopup } from "../../../common/CancellationConfirmationPopup/CancellationConfirmationPopup";

interface PayOffSelectedConsumptionsPopupProps {
  paySelectedText: string;
  onPayOffSelectedConsumptionsClick: () => void;
  disabled: boolean;
}

export const PayOffSelectedConsumptionsPopup: FC<
  PayOffSelectedConsumptionsPopupProps
> = ({ paySelectedText, onPayOffSelectedConsumptionsClick, disabled }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonMiddle
        text={paySelectedText}
        type={ButtonTypes.Button}
        onClick={() => {
          setIsPopupOpen(true);
        }}
        disabled={disabled}
      />
      <CancellationConfirmationPopup
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        title="Saldar las estadías seleccionadas?"
        primaryButtonText="Si"
        onPrimaryButtonClick={() => {
          onPayOffSelectedConsumptionsClick();
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
