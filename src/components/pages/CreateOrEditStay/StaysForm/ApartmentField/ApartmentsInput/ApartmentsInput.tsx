import React from "react";
import Select, { ActionMeta } from "react-select";
import { FieldProps } from "formik";
import { apartments } from "../../../apartments";

interface Option {
  value: string;
  label: string;
}

export const ApartmentsInput: React.FC<FieldProps> = ({ field, form }) => {
  // TODO: Ver si se lo puede reemplazar por el autocomplete de material (si da el tiempo)
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
