import React, { FC, useContext, useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
/* import axios from "axios"; */
import { Apartment } from "../../../../../../../types/types";
import { AxiosContext } from "../../../../../../context/AxiosContext";
import { AuthContext } from "../../../../../../context/AuthContext";

export const ApartmentsInput: FC<FieldProps & TextFieldProps> = props => {
  const {
    form: { /* touched, setTouched,  */ setFieldValue }
  } = props;
  const { error, helperText } = props;
  const {
    field: { name }
  } = props;

  const { authAxios } = useContext(AxiosContext);
  const { authState } = useContext(AuthContext);
  const { authenticated } = authState;

  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isLoadingApartments, setIsLoadingApartments] =
    useState<boolean>(false);

  useEffect(() => {
    if (authenticated) {
      const getApartmentList = async (): Promise<Apartment[]> => {
        const apartmentListResponse = await authAxios.get("/apartments/");
        return apartmentListResponse.data.results;
      };
      const fetchApartments = async () => {
        setIsLoadingApartments(true);
        const apartmentsList = await getApartmentList();
        setApartments(apartmentsList);
        setIsLoadingApartments(false);
      };
      fetchApartments();
    }
  }, [authAxios, authenticated]);

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
