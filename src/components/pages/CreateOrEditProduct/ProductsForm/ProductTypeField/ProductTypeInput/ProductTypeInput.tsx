import { MenuItem, Select } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { benefictList } from "../../../../../../models/beneficts";

export const ProductTypeInput: FC<FieldProps> = ({ field, form }) => {
  return (
    <Select
      value={field.value ?? ""}
      onChange={event => {
        form.setFieldValue(field.name, event.target.value);
      }}
      labelId="productType"
      required
    >
      {benefictList.map((benefict, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={index} value={benefict.typeOfBenefict}>
          {benefict.name}
        </MenuItem>
      ))}
    </Select>
  );
};
