import { Field } from "formik";
import React from "react";

import { ApartmentsInput } from "./ApartmentsInput/ApartmentsInput";
import "./ApartmentsField.scss";

export const ApartmentsField = () => {
  return (
    <div className="apartmentsField">
      <label className="staysFormLabel" htmlFor="apartment">
        Departamento
      </label>
      <Field id="apartment" name="apartment" component={ApartmentsInput} />
    </div>
  );
};
