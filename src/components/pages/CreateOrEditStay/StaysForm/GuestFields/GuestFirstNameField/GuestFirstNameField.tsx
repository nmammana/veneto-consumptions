import { Field } from "formik";
import React from "react";
import { GuestFirstNameInput } from "./GuestFirstNameInput/GuestFirstNameInput";
import "./GuestFirstNameField.scss";

export const GuestFirstNameField = () => {
  return (
    <div className="guestFirstNameField">
      <label className="guestFormLabel" htmlFor="guestFirstName">
        Nombre
      </label>
      <Field
        id="guestFirstName"
        name="guestFirstName"
        component={GuestFirstNameInput}
      />
    </div>
  );
};
