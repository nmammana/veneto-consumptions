import React, { FC, useState } from "react";
import { ButtonTypes } from "../../../../types/types";
import { ButtonMiddle } from "../../../common/buttons/ButtonMiddle/ButtonMiddle";
import { CancellationConfirmationPopup } from "../../../common/CancellationConfirmationPopup/CancellationConfirmationPopup";

interface PayOffAllConsumptionsPopupProps {
  payTotalText: string;
  onPayOffAllConsumptionsClick: () => void;
  disabled: boolean;
}

export const PayOffAllConsumptionsPopup: FC<
  PayOffAllConsumptionsPopupProps
> = ({ payTotalText, onPayOffAllConsumptionsClick, disabled }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonMiddle
        text={payTotalText}
        type={ButtonTypes.Button}
        onClick={() => {
          setIsPopupOpen(true);
        }}
        disabled={disabled}
      />
      <CancellationConfirmationPopup
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        title="Saldar toda la estadia?"
        primaryButtonText="Si"
        onPrimaryButtonClick={() => {
          onPayOffAllConsumptionsClick();
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
