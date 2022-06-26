import { Field } from "formik";
import React from "react";
import { GuestNameInput } from "./GuestNameInput/GuestNameInput";
import "./GuestNameField.scss";

export const GuestNameField = () => {
  return (
    <div className="guestNameField">
      <label className="guestFormLabel" htmlFor="guestName">
        Nombre y apellido
      </label>
      <Field id="guestName" name="guestName" component={GuestNameInput} />
    </div>
  );
};
