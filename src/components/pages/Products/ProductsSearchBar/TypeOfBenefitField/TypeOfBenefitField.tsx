import { Field } from "formik";
import React, { FC } from "react";
import { TypeOfBenefitInput } from "./TypeOfBenefitInput/TypeOfBenefitInput";
import "./TypeOfBenefitField.scss";

interface TypeOfBenefitFieldProps {
  className?: string;
}

export const TypeOfBenefitField: FC<TypeOfBenefitFieldProps> = ({
  className
}) => {
  return (
    <div className={`typeOfBenefitField ${className}`}>
      <label className="productsSearchBarLabel" htmlFor="typeOfBenefit">
        Categoría
      </label>
      <Field
        id="typeOfBenefit"
        name="typeOfBenefit"
        component={TypeOfBenefitInput}
      />
    </div>
  );
};
