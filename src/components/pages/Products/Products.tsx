import { isEmpty } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { Item, ProductSearchParams } from "../../../types/types";
import { Layout } from "../../common/Layout/Layout";
import { Spinner } from "../../common/Spinner/Spinner";
import { ProductsContext } from "../../context/ProductsContext";
import { CreateProductPopup } from "./CreateProductPopup/CreateProductPopup";
import { ProductsSearchBar } from "./ProductsSearchBar/ProductsSearchbar";
import { ProductsTable } from "./ProductsTable/ProductsTable";

export const Products = () => {
  const { productList, isLoadingProductList } = useContext(ProductsContext);
  const [filteredProductList, setFilteredProductList] = useState<Item[]>([]);

  const filterProductsByType = (list: Item[], type?: number): Item[] => {
    if (type) {
      return list.filter(product => product.type_of_benefit === type);
    }
    return list;
  };

  const filterProductsByName = (list: Item[], name?: string): Item[] => {
    if (name) {
      return list.filter(product => product.name === name);
    }
    return list;
  };

  const getProductsListAccordingToFilters = (values: ProductSearchParams) => {
    const { typeOfBenefit, productName } = values;
    const filteredList =
      !typeOfBenefit && !productName
        ? productList
        : filterProductsByName(
            filterProductsByType(productList, typeOfBenefit),
            productName
          );
    setFilteredProductList(filteredList);
  };

  useEffect(() => {
    if (!isEmpty(productList)) {
      setFilteredProductList(productList);
    }
  }, [productList]);

  return (
    <>
      <Layout>
        {isLoadingProductList ? (
          <Spinner />
        ) : (
          <div>
            <ProductsSearchBar
              getProductsListAccordingToFilters={
                getProductsListAccordingToFilters
              }
            />
            <ProductsTable productList={filteredProductList} />
          </div>
        )}
      </Layout>
      <CreateProductPopup />
    </>
  );
};
