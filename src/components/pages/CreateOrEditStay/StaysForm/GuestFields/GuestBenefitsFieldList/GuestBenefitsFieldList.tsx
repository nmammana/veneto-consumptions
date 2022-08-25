import { FieldArray } from "formik";
import React from "react";
import { benefitList } from "../../../../../../models/benefits";
import { GuestBenefitField } from "./GuestBenefitField/GuestBenefitField";
import "./GuestBenefitsFieldList.scss";

export const GuestBenefitsFieldList = () => {
  return (
    <FieldArray
      name="benefits"
      render={() => (
        <div className="guestBenefitList">
          <p className="guestBenefitListTitle">Nombre del beneficio</p>
          {benefitList.map((benefit, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <GuestBenefitField key={index} benefit={benefit} index={index} />
          ))}
        </div>
      )}
    />
  );
};
