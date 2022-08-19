import { Field } from "formik";
import React, { FC } from "react";

import { ApartmentsInput } from "./ApartmentsInput/ApartmentsInput";
import "./ApartmentsField.scss";

interface ApartmentFieldProps {
  className?: string;
}

export const ApartmentsField: FC<ApartmentFieldProps> = ({ className }) => {
  return (
    <div className={`apartmentsField ${className}`}>
      <label className="staysFormLabel" htmlFor="apartment">
        Departamento
      </label>
      <Field id="apartment" name="apartment" component={ApartmentsInput} />
    </div>
  );
};
