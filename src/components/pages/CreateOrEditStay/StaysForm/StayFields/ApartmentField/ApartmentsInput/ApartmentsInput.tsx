import React, { FC, useContext } from "react";
import { Autocomplete } from "@mui/material";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
/* import axios from "axios"; */
import { ApartmentsContext } from "../../../../../../context/ApartmentsContext";

export const ApartmentsInput: FC<FieldProps & TextFieldProps> = props => {
  const {
    form: { /* touched, setTouched,  */ setFieldValue }
  } = props;
  const { error, helperText } = props;
  const {
    field: { name }
  } = props;
  const apartmentsContext = useContext(ApartmentsContext);

  return (
    <Autocomplete
      onChange={(_, value) => {
        setFieldValue(name, value?.id);
      }}
      loading={apartmentsContext?.isLoadingApartmentList}
      options={apartmentsContext?.apartmentList ?? []}
      /* inputValue={
        apartments.find(apartment => apartment.name === name)?.name ?? ""
      } */
      getOptionLabel={value => value.name}
      /* onBlur={() => setTouched({ ...touched, [name!]: true })} */
      renderInput={textFieldProps => (
        <TextField
          {...props}
          {...textFieldProps}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};
