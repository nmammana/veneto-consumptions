import { Field } from "formik";
import React from "react";
import { EndDateInput } from "./EndDateInput/EndDateInput";
import "./EndDateField.scss";

export const EndDateField = () => {
  return (
    <div className="endDateField">
      <label className="staysFormLabel" htmlFor="endDate">
        Hasta
      </label>
      <Field id="endDate" name="endDate" component={EndDateInput} />
    </div>
  );
};
