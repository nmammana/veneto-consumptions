import { Field } from "formik";
import React from "react";
import "./GuestIdentityNumberField.scss";
import { GuestIdentityNumberInput } from "./GuestIdentityNumberInput/GuestIdentityNumberInput";

export const GuestIdentityNumberField = () => {
  return (
    <div className="guestIdentityNumberField">
      <label className="guestFormLabel" htmlFor="guestIdentityNumber">
        Documento
      </label>
      <Field
        id="guestIdentityNumber"
        name="identityNumber"
        component={GuestIdentityNumberInput}
      />
    </div>
  );
};
