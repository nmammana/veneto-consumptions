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
      <Field id="endDate" name="end_date" component={EndDateInput} />
    </div>
  );
};
