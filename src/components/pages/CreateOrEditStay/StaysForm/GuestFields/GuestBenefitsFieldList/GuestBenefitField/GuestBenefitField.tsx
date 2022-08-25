import { Field } from "formik";
import React, { FC } from "react";
import { BenefitName } from "../../../../../../../types/types";
import { GuestBenefitQuantityInput } from "./GuestBenefitQuantityInput/GuestBenefitQuantityInput";
import "./GuestBenefitField.scss";

interface GuestBenefitFieldProps {
  benefit: BenefitName;
  index: number;
}

export const GuestBenefitField: FC<GuestBenefitFieldProps> = ({
  benefit,
  index
}) => {
  return (
    <div className="benefitFieldContainer">
      <label className="guestBenefitFieldLabel" htmlFor={benefit?.name}>
        {benefit?.name}
      </label>
      <Field
        id={benefit?.name}
        name={`benefits[${index}].${benefit?.typeOfBenefit}`}
        component={GuestBenefitQuantityInput}
        className="guestBenefitField"
      />
    </div>
  );
};
