import { Field } from "formik";
import React from "react";
import "./GuestEmailField.scss";
import { GuestEmailInput } from "./GuestEmailInput/GuestEmailInput";

export const GuestEmailField = () => {
  return (
    <div className="guestEmailField">
      <label className="guestFormLabel" htmlFor="guestEmail">
        Email
      </label>
      <Field id="guestEmail" name="email" component={GuestEmailInput} />
    </div>
  );
};
