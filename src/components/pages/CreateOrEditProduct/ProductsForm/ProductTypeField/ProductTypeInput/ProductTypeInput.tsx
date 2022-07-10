import { MenuItem, Select } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { BenefictName, TypeOfBenefict } from "../../../../../../types/types";

export const ProductTypeInput: FC<FieldProps> = ({ field, form }) => {
  const beneficts: BenefictName[] = [
    { name: "Desayuno", typeOfBenefict: TypeOfBenefict.Breakfast },
    { name: "Almuerzo", typeOfBenefict: TypeOfBenefict.Lunch },
    { name: "Merienda", typeOfBenefict: TypeOfBenefict.Snack },
    { name: "Cena", typeOfBenefict: TypeOfBenefict.Dinner },
    { name: "Spa", typeOfBenefict: TypeOfBenefict.Spa },
    { name: "Kiosco", typeOfBenefict: TypeOfBenefict.Store }
  ];

  return (
    <Select
      value={field.value ?? ""}
      onChange={event => {
        form.setFieldValue(field.name, event.target.value);
      }}
      labelId="productType"
      required
    >
      {beneficts.map((benefict, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={index} value={benefict.typeOfBenefict}>
          {benefict.name}
        </MenuItem>
      ))}
    </Select>
  );
};
