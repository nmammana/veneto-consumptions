import React, { useContext } from "react";
import { ProductsContext } from "../../../../../context/ProductsContext";
import { GuestBenefictField } from "./GuestBenefictField/GuestBenefictField";
import "./GuestBenefictsFieldList.scss";

export const GuestBenefictsFieldList = () => {
  const productContext = useContext(ProductsContext);
  return (
    <div className="guestBenefictList">
      <p className="guestBenefictListTitle">Nombre del beneficio</p>
      {productContext?.productList.map((product, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <GuestBenefictField key={index} product={product} />
      ))}
    </div>
  );
};
