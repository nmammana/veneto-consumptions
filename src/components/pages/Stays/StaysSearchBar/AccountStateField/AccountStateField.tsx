import { Field } from "formik";
import React, { FC } from "react";
import { AccountStateInput } from "./AccountStateInput/AccountStateInput";
import "./AccountStateField.scss";

interface AccountStateFieldProps {
  className?: string;
}

export const AccountStateField: FC<AccountStateFieldProps> = ({
  className
}) => {
  return (
    <div className={`accountStateField ${className}`}>
      <label className="staysFormLabel" htmlFor="payed">
        Estado de la cuenta
      </label>
      <Field id="payed" name="payed" component={AccountStateInput} />
    </div>
  );
};
