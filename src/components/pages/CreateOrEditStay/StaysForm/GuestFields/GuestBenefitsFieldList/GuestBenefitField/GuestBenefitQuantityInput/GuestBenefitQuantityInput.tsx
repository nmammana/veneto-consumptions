import { FieldProps } from "formik";
import React, { FC } from "react";
import { useTextInputStyle } from "../../../../../../../../styles/muiStyles";
import { TextInput } from "../../../../../../../common/TextInput/TextInput";

export const GuestBenefitQuantityInput: FC<FieldProps> = ({ field, form }) => {
  const classes = useTextInputStyle();
  return (
    <TextInput
      className={classes.textInputStyle}
      type="number"
      value={field.value}
      onChange={value => {
        form.setFieldValue(field.name, value);
      }}
    />
  );
};
