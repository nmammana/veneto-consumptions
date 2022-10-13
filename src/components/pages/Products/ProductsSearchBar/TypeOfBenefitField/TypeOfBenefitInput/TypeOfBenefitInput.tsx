import React, { FC, useState } from "react";
import { FieldProps } from "formik";
import { benefitList } from "../../../../../../models/benefits";
import { BenefitName } from "../../../../../../types/types";
import { Autocomplete } from "../../../../../common/Autocomplete/Autocomplete";

export const TypeOfBenefitInput: FC<FieldProps> = ({ field, form }) => {
  const categoryOptions = benefitList.map(benefit => ({
    text: benefit.name,
    title: benefit.name,
    value: benefit
  }));
  const [product, setProduct] = useState<BenefitName>();
  const compareProducts = (val1: BenefitName, val2: BenefitName) =>
    val1.typeOfBenefit === val2.typeOfBenefit;

  return (
    <Autocomplete<BenefitName>
      options={categoryOptions}
      loadingText="Cargando categorías..."
      clearText="Limpiar"
      closeText="Cerrar"
      noOptionsText="No hay opciones"
      openText="Abrir"
      onChange={value => {
        form.setFieldValue(field.name, value?.typeOfBenefit);
        setProduct(value);
      }}
      value={product}
      compareValues={compareProducts}
    />
  );
};
