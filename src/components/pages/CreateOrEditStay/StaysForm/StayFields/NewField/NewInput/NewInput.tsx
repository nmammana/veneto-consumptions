import React, { FC } from "react";
import { Autocomplete } from "@mui/material";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
import { useTextInputStyle } from "../../../../../../../styles/muiStyles";

export const NewInput: FC<FieldProps & TextFieldProps> = props => {
  const { form, field } = props;
  const { error, helperText } = props;
  const classes = useTextInputStyle();

  const fieldValues = [
    { id: 1, value: "rojo" },
    { id: 2, value: "amarillo" },
    { id: 3, value: "verde" }
  ];

  /* TODO: ESTE COMPONENTE SE UTILIZA DE PRUEBA PARA EL AUTOCOMPLETE, 
  UNA VEZ QUE FUNCIONE 100% BIEN HAY QUE BORRARLO
 */

  return (
    <Autocomplete
      onChange={(_, value) => {
        form.setFieldValue(field.name, value?.id);
      }}
      options={fieldValues ?? []}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={value => value.value ?? ""}
      renderOption={(renderProps, option) => {
        return (
          <li {...renderProps} key={option.id}>
            {option.value}
          </li>
        );
      }}
      renderInput={textFieldProps => (
        <TextField
          {...textFieldProps}
          className={classes.textInputStyle}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};
