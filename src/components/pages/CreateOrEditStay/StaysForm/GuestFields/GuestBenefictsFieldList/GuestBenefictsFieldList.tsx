import { FieldArray } from "formik";
import React from "react";
import { benefictList } from "../../../../../../models/beneficts";
import { GuestBenefictField } from "./GuestBenefictField/GuestBenefictField";
import "./GuestBenefictsFieldList.scss";

export const GuestBenefictsFieldList = () => {
  return (
    <FieldArray
      name="beneficts"
      render={() => (
        <div className="guestBenefictList">
          <p className="guestBenefictListTitle">Nombre del beneficio</p>
          {benefictList.map((benefict, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <GuestBenefictField key={index} benefict={benefict} index={index} />
          ))}
        </div>
      )}
    />
  );
};
