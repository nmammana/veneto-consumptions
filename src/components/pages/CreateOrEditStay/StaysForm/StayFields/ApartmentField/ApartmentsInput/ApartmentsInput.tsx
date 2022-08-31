import React, { FC, useContext } from "react";
import { Autocomplete } from "@mui/material";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
import { ApartmentsContext } from "../../../../../../context/ApartmentsContext";
import { StaysContext } from "../../../../../../context/StaysContext";
import { useTextFieldInputStyle } from "../../../../../../../styles/muiStyles";

export const ApartmentsInput: FC<FieldProps & TextFieldProps> = props => {
  const { setCurrentStay } = useContext(StaysContext);
  const { form, field } = props;
  const { error, helperText } = props;
  const { isLoadingApartmentList, apartmentList } =
    useContext(ApartmentsContext);
  const classes = useTextFieldInputStyle();

  return (
    <Autocomplete
      onChange={(_, value) => {
        form.setFieldValue(field.name, value?.id);
        setCurrentStay(currentStay => ({
          ...currentStay,
          apartment: value?.id
        }));
      }}
      loading={isLoadingApartmentList}
      options={apartmentList ?? []}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={value => value.name ?? ""}
      value={
        apartmentList.find(apartment => apartment.id === field.value) ?? null
      }
      defaultValue={null}
      renderOption={(renderProps, option) => {
        return (
          <li {...renderProps} key={option.id}>
            {option.name}
          </li>
        );
      }}
      renderInput={textFieldProps => (
        <TextField
          {...textFieldProps}
          className={classes.textFieldInputStyle}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};
