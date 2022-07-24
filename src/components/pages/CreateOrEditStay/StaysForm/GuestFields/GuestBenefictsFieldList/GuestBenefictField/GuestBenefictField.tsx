import { Field } from "formik";
import React, { FC } from "react";
import { BenefictName } from "../../../../../../../types/types";
import { GuestBenefictQuantityInput } from "./GuestBenefictQuantityInput/GuestBenefictQuantityInput";
import "./GuestBenefictField.scss";

interface GuestBenefictFieldProps {
  benefict: BenefictName;
  index: number;
}

export const GuestBenefictField: FC<GuestBenefictFieldProps> = ({
  benefict,
  index
}) => {
  return (
    <div className="benefictFieldContainer">
      <label className="guestBenefictFieldLabel" htmlFor={benefict?.name}>
        {benefict?.name}
      </label>
      <Field
        id={benefict?.name}
        name={`beneficts[${index}].${benefict?.typeOfBenefict}`}
        component={GuestBenefictQuantityInput}
        className="guestBenefictField"
      />
    </div>
  );
};
