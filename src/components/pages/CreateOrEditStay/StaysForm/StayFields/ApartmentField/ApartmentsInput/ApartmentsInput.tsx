import React, { FC, useContext, useState } from "react";
import { FieldProps } from "formik";
import { ApartmentsContext } from "../../../../../../context/ApartmentsContext";
import { StaysContext } from "../../../../../../context/StaysContext";
import { Autocomplete } from "../../../../../../common/Autocomplete/Autocomplete";
import { Apartment } from "../../../../../../../types/types";

export const ApartmentsInput: FC<FieldProps> = ({ field, form }) => {
  const { setCurrentStay } = useContext(StaysContext);
  const { isLoadingApartmentList, apartmentList } =
    useContext(ApartmentsContext);

  const apartmentOptions = apartmentList.map(apartment => ({
    text: apartment.name,
    title: apartment.name,
    value: apartment
  }));
  const [apartment, setApartment] = useState<Apartment>();
  const compareApartments = (val1: Apartment, val2: Apartment) =>
    val1.id === val2.id;

  return (
    <Autocomplete<Apartment>
      options={apartmentOptions}
      loading={isLoadingApartmentList}
      loadingText="Cargando departamentos..."
      clearText="Limpiar"
      closeText="Cerrar"
      noOptionsText="No hay opciones"
      openText="Abrir"
      onChange={value => {
        form.setFieldValue(field.name, value?.id);
        setCurrentStay(currentStay => ({
          ...currentStay,
          apartment: value?.id
        }));
        setApartment(value);
      }}
      value={apartment}
      compareValues={compareApartments}
    />
  );
};
