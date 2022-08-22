import { FieldProps } from "formik";
import React, { FC } from "react";
import { ButtonTypes } from "../../../../../types/types";
import { ButtonSmall } from "../../../../common/buttons/ButtonSmall/ButtonSmall";

export const SubmitButton: FC<FieldProps> = ({ form }) => {
  return (
    <ButtonSmall
      type={ButtonTypes.Submit}
      text="INGRESAR"
      disabled={!form.dirty}
    />
  );
};
