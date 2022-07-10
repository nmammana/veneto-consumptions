import React, { FC, useContext, useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
/* import axios from "axios"; */
import { Apartment } from "../../../../../../../types/types";
import { AxiosContext } from "../../../../../../context/AxiosContext";

export const ApartmentsInput: FC<FieldProps & TextFieldProps> = props => {
  const {
    form: { /* touched, setTouched,  */ setFieldValue }
  } = props;
  const { error, helperText } = props;
  const {
    field: { name }
  } = props;

  const { authAxios } = useContext(AxiosContext);

  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isLoadingApartments, setIsLoadingApartments] =
    useState<boolean>(false);

  const getApartmentsList = async (): Promise<Apartment[]> => {
    const apartmentsResponse = await authAxios.get("/apartments/");
    return apartmentsResponse.data.results;
  };

  useEffect(() => {
    const fetchApartments = async () => {
      setIsLoadingApartments(true);
      const apartmentsList = await getApartmentsList();
      setApartments(apartmentsList);
      setIsLoadingApartments(false);
    };
    fetchApartments();
  }, []);

  return (
    <Autocomplete
      onChange={(_, value) => {
        setFieldValue(name, value?.id);
      }}
      loading={isLoadingApartments}
      options={apartments}
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
