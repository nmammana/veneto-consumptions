import { FieldProps } from "formik";
import React, { FC } from "react";
import { useTextInputStyle } from "../../../../../../styles/muiStyles";
import { TextInput } from "../../../../../common/TextInput/TextInput";
import { Money } from "../../../../../icons";
import "./ProductPriceInput.scss";

export const ProductPriceInput: FC<FieldProps> = ({ field, form }) => {
  const classes = useTextInputStyle();
  return (
    <TextInput
      className={classes.textInputStyle}
      value={field.value}
      onChange={value => {
        form.setFieldValue(field.name, value.replace(/^0+/, ""));
      }}
      StartIcon={Money}
      startIconClassname="startIcon"
    />
  );
};
