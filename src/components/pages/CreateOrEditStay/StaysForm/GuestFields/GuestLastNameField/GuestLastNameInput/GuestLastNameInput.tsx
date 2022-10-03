import { FieldProps } from "formik";
import React, { FC } from "react";
import { TextInput } from "../../../../../../common/TextInput/TextInput";

export const GuestLastNameInput: FC<FieldProps> = ({ field, form }) => {
  return (
    <TextInput
      value={field.value}
      onChange={value => {
        form.setFieldValue(field.name, value);
      }}
    />
  );
};
