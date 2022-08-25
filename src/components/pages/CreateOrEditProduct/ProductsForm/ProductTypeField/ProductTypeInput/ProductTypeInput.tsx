import { MenuItem, Select } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { benefitList } from "../../../../../../models/benefits";
import { useSelectFieldInputStyles } from "../../../../../../styles/muiStyles";

export const ProductTypeInput: FC<FieldProps> = ({ field, form }) => {
  const classes = useSelectFieldInputStyles();
  return (
    <Select
      className={classes.select}
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
