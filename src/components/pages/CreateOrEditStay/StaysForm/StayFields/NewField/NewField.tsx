import { Field } from "formik";
import React, { FC } from "react";
import { NewInput } from "./NewInput/NewInput";

interface NewFieldProps {
  className?: string;
}

/* TODO: ESTE COMPONENTE SE UTILIZA DE PRUEBA PARA EL AUTOCOMPLETE, 
  UNA VEZ QUE FUNCIONE 100% BIEN HAY QUE BORRARLO
 */
export const NewField: FC<NewFieldProps> = ({ className }) => {
  return (
    <div className={`apartmentsField ${className}`}>
      <label className="staysFormLabel" htmlFor="apartment">
        Departamento
      </label>
      <Field id="apartment" name="apartment" component={NewInput} />
    </div>
  );
};
