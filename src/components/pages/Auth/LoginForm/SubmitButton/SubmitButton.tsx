import { FieldProps } from "formik";
import React, { FC } from "react";
import { ButtonTypes } from "../../../../../types/types";
import { ButtonMiddle } from "../../../../common/buttons/ButtonMiddle/ButtonMiddle";

export const SubmitButton: FC<FieldProps> = ({ form }) => {
  return (
    <ButtonMiddle
      type={ButtonTypes.Submit}
      text="INGRESAR"
      disabled={!form.dirty}
    />
  );
};
