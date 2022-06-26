import React from "react";
import "./GuestFields.scss";
import { GuestNameField } from "./GuestNameField/GuestNameField";

export const GuestFields = () => {
  return (
    <div>
      <p className="guestFormTitle">Huésped y beneficios</p>
      <GuestNameField />
      <p>email del huesped</p>
      <p>Nombre del beneficio</p>
      <p>cantidad</p>
      <p>boton de agregar</p>
    </div>
  );
};
