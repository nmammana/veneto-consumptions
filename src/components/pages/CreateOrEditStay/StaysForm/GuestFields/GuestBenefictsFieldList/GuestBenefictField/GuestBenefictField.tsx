import { Field } from "formik";
import React, { FC } from "react";
import { Item } from "../../../../../../../types/types";
import { GuestBenefictQuantityInput } from "./GuestBenefictQuantityInput/GuestBenefictQuantityInput";
import "./GuestBenefictField.scss";

interface GuestBenefictFieldProps {
  product: Item;
}

export const GuestBenefictField: FC<GuestBenefictFieldProps> = ({
  product
}) => {
  return (
    <div className="benefictFieldContainer">
      <label className="guestBenefictFieldLabel" htmlFor={product?.name}>
        {product?.name}
      </label>
      <Field
        id={product?.name}
        name={product?.id}
        component={GuestBenefictQuantityInput}
        className="guestBenefictField"
      />
    </div>
  );
};
