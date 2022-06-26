import React from "react";
import { ApartmentsField } from "./ApartmentField/ApartmentsField";
import { EndDateField } from "./EndDateField/EndDateField";
import { StartDateField } from "./StartDateField/StartDateField";
import "./StayFields.scss";

export const StayFields = () => {
  return (
    <>
      <p className="stayFormTitle">Cargar/editar estadía</p>
      <ApartmentsField />
      <div className="dateFields">
        <StartDateField />
        <EndDateField />
      </div>
    </>
  );
};
