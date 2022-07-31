import { Field } from "formik";
import React from "react";
import "./GuestEmailField.scss";
import { GuestEmailInput } from "./GuestEmailInput/GuestEmailInput";

export const GuestEmailField = () => {
  /* const validateEmail = (value: string): Optional<string> => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Invalid email address";
    }
    return undefined;
  }; */

  return (
    <div className="guestEmailField">
      <label className="guestFormLabel" htmlFor="guestEmail">
        Email
      </label>
      <Field
        id="guestEmail"
        name="email"
        component={GuestEmailInput}
        /* validate={validateEmail} */
      />
    </div>
  );
};
