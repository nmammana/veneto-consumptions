import { Field } from "formik";
import React, { FC } from "react";
import { EndDateInput } from "./EndDateInput/EndDateInput";
import "./EndDateField.scss";

interface EndDateFieldProps {
  className?: string;
}

export const EndDateField: FC<EndDateFieldProps> = ({ className }) => {
  return (
    <div className={`endDateField ${className}`}>
      <label className="staysFormLabel" htmlFor="endDate">
        Ingreso hasta
      </label>
      <Field id="endDate" name="end_date" component={EndDateInput} />
    </div>
  );
};
