import React from "react";
import Select, { ActionMeta } from "react-select";
import { FieldProps } from "formik";
import { apartments } from "../../../apartments";

interface Option {
  value: string;
  label: string;
}

export const ApartmentsInput: React.FC<FieldProps> = ({ field, form }) => {
  // TODO: Borrar si el autocomplete de material anda bien
  return (
    <Select
      options={apartments}
      isClearable
      isDisabled={false}
      isLoading={false}
      value={apartments.find(option => option.value === field.value)}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange={(option: Option | null, actionMeta: ActionMeta<Option>) =>
        form.setFieldValue(field.name, option?.value)
      }
      placeholder=""
    />
  );
};
