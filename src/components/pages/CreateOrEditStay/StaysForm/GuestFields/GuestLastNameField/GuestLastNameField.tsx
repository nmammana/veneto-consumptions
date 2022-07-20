import { Field } from "formik";
import React from "react";
import "./GuestLastNameField.scss";
import { GuestLastNameInput } from "./GuestLastNameInput/GuestLastNameInput";

export const GuestLastNameField = () => {
  return (
    <div className="guestLastNameField">
      <label className="guestFormLabel" htmlFor="guestLastName">
        Apellido
      </label>
      <Field
        id="guestLastName"
        name="guestLastName"
        component={GuestLastNameInput}
      />
    </div>
  );
};
