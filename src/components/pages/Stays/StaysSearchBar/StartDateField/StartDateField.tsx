import { Field } from "formik";
import React from "react";
import { StartDateInput } from "./StartDateInput/StartDateInput";
import "./StartDateField.scss";

export const StartDateField = () => {
  return (
    <div className="startDateField">
      <label className="staysFormLabel" htmlFor="startDate">
        Desde
      </label>
      <Field name="start_date" id="startDate" component={StartDateInput} />
    </div>
  );
};
