import { Field } from "formik";
import React, { FC } from "react";
import { StartDateInput } from "./StartDateInput/StartDateInput";
import "./StartDateField.scss";

interface StartDateFieldProps {
  className?: string;
}

export const StartDateField: FC<StartDateFieldProps> = ({ className }) => {
  return (
    <div className={`startDateField ${className}`}>
      <label className="staysFormLabel" htmlFor="startDate">
        Ingreso desde
      </label>
      <Field name="start_date" id="startDate" component={StartDateInput} />
    </div>
  );
};
