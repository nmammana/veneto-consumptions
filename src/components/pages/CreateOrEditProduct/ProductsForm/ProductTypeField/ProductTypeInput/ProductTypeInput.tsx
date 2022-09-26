import { MenuItem, Select } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { benefitList } from "../../../../../../models/benefits";

export const ProductTypeInput: FC<FieldProps> = ({ field, form }) => {
  return (
    <Select
      value={field.value ?? ""}
      onChange={event => {
        form.setFieldValue(field.name, event.target.value);
      }}
      labelId="productType"
    >
      {benefitList.map((benefit, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={index} value={benefit.typeOfBenefit}>
          {benefit.name}
        </MenuItem>
      ))}
    </Select>
  );
};
