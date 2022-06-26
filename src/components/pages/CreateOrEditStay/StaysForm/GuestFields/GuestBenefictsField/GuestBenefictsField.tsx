import { Field } from "formik";
import React from "react";
import { GuestBenefictNameInput } from "./GuestBenefictNameInput/GuestBenefictNameInput";
import { GuestBenefictQuantityInput } from "./GuestBenefictQuantityInput/GuestBenefictQuantityInput";

import "./GuestBenefictsField.scss";

export const GuestBenefictsField = () => {
  return (
    <div className="guestBenefictsField">
      <label className="guestFormLabel" htmlFor="guestName">
        Nombre del beneficio
      </label>
      <div className="benefictFieldContainer">
        <Field
          id="guestBenefictName"
          name="guestBenefictName"
          component={GuestBenefictNameInput}
        />
        <Field
          id="guestBenefictQuantity"
          name="guestBenefictQuantity"
          component={GuestBenefictQuantityInput}
        />
      </div>
    </div>
  );
};
