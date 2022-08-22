import React, { FC } from "react";
import { ButtonTypes } from "../../../../../types/types";
import { ButtonSmall } from "../../../../common/buttons/ButtonSmall/ButtonSmall";
import { GuestBenefictsFieldList } from "./GuestBenefictsFieldList/GuestBenefictsFieldList";
import { GuestEmailField } from "./GuestEmailField/GuestEmailField";
import "./GuestFields.scss";
import { GuestFirstNameField } from "./GuestFirstNameField/GuestFirstNameField";
import { GuestIdentityNumberField } from "./GuestIdentityNumberField/GuestIdentityNumberField";
import { GuestLastNameField } from "./GuestLastNameField/GuestLastNameField";
import { GuestQRCodeField } from "./GuestQRCodeField/GuestQRCodeField";

interface GuestFieldsProps {
  onAddGuestClick: () => void;
}

export const GuestFields: FC<GuestFieldsProps> = ({ onAddGuestClick }) => {
  return (
    <div className="guestFields">
      <p className="guestFormTitle">Huésped y beneficios</p>
      <GuestFirstNameField />
      <GuestLastNameField />
      <GuestEmailField />
      <GuestIdentityNumberField />
      <GuestQRCodeField />
      <GuestBenefictsFieldList />
      <div className="addGuestButtonContainer">
        <ButtonSmall
          type={ButtonTypes.Button}
          text="Agregar"
          onClick={onAddGuestClick}
        />
      </div>
    </div>
  );
};
