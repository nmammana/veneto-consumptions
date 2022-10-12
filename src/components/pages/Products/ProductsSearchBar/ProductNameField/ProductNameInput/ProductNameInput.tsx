import React, { FC, useContext, useEffect, useState } from "react";
import { FieldProps, useFormikContext } from "formik";
import { Autocomplete } from "../../../../../common/Autocomplete/Autocomplete";
import { Item, ProductSearchParams } from "../../../../../../types/types";
import { ProductsContext } from "../../../../../context/ProductsContext";

export const ProductNameInput: FC<FieldProps> = ({ field, form }) => {
  const { isLoadingProductList, productList } = useContext(ProductsContext);

  const {
    values: { typeOfBenefit }
  } = useFormikContext<ProductSearchParams>();

  const products = typeOfBenefit
    ? productList.filter(product => product.type_of_benefit === typeOfBenefit)
    : productList;

  const productOptions = products.map(product => ({
    text: product.name,
    title: product.name,
    value: product
  }));
  const [product, setProduct] = useState<Item>();
  const compareProducts = (val1: Item, val2: Item) => val1.id === val2.id;

  useEffect(() => {
    if (typeOfBenefit && typeOfBenefit !== product?.type_of_benefit) {
      setProduct(undefined);
    }
  }, [product, typeOfBenefit]);

  return (
    <Autocomplete<Item>
      options={productOptions}
      loading={isLoadingProductList}
      loadingText="Cargando productos..."
      clearText="Limpiar"
      closeText="Cerrar"
      noOptionsText="No hay opciones"
      openText="Abrir"
      onChange={value => {
        form.setFieldValue(field.name, value?.name);
        setProduct(value);
      }}
      value={product}
      compareValues={compareProducts}
    />
  );
};
