import React, { FC, useContext } from "react";
import { Autocomplete } from "@mui/material";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
import { ApartmentsContext } from "../../../../../../context/ApartmentsContext";
import { StaysContext } from "../../../../../../context/StaysContext";

export const ApartmentsInput: FC<FieldProps & TextFieldProps> = props => {
  const { setCurrentStay } = useContext(StaysContext);
  const { form, field } = props;
  const { error, helperText } = props;
  const apartmentsContext = useContext(ApartmentsContext);

  return (
    <Autocomplete
      onChange={(_, value) => {
        form.setFieldValue(field.name, value?.id);
        setCurrentStay(currentStay => ({
          ...currentStay,
          apartment: value?.id
        }));
      }}
      loading={apartmentsContext?.isLoadingApartmentList}
      options={apartmentsContext?.apartmentList ?? []}
      value={
        apartmentsContext?.apartmentList.find(
          apartment => apartment.id === field.value
        ) ?? undefined
      }
      getOptionLabel={value =>
        typeof value.name === "undefined" ? "" : value.name
      }
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
