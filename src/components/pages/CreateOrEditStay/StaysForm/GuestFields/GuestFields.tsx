import { Field } from "formik";
import React from "react";
import { AddGuestButtonInput } from "./AddGuestButtonInput/AddGuestButtonInput";
import { GuestBenefictsField } from "./GuestBenefictsField/GuestBenefictsField";
import { GuestEmailField } from "./GuestEmailField/GuestEmailField";
import "./GuestFields.scss";
import { GuestNameField } from "./GuestNameField/GuestNameField";
import { GuestQRCodeField } from "./GuestQRCodeField/GuestQRCodeField";

export const GuestFields = () => {
  return (
    <div>
      <p className="guestFormTitle">Huésped y beneficios</p>
      <GuestNameField />
      <GuestEmailField />
      <GuestQRCodeField />
      <GuestBenefictsField />
      <Field id="submit" name="submit" component={AddGuestButtonInput} />
    </div>
  );
};
