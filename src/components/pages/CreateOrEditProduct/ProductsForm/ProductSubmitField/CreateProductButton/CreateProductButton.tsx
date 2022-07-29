import { FieldProps } from "formik";
import React, { FC } from "react";
import { ButtonTypes } from "../../../../../../types/types";
import { ButtonLarge } from "../../../../../common/buttons/ButtonLarge/ButtonLarge";

export const CreateProductButton: FC<FieldProps> = ({ form }) => {
  return (
    <ButtonLarge
      text="Cargar producto"
      className="submitButton"
      type={ButtonTypes.Submit}
      disabled={!form.dirty}
    />
  );
};
