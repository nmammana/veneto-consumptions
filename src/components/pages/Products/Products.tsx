import React, { useContext } from "react";
import { Layout } from "../../common/Layout/Layout";
import { Spinner } from "../../common/Spinner/Spinner";
import { ProductsContext } from "../../context/ProductsContext";
import { CreateProductPopup } from "./CreateProductPopup/CreateProductPopup";
import { ProductsTable } from "./ProductsTable/ProductsTable";

export const Products = () => {
  const { isLoadingProductList } = useContext(ProductsContext);

  return (
    <>
      <Layout>{isLoadingProductList ? <Spinner /> : <ProductsTable />}</Layout>
      <CreateProductPopup />
    </>
  );
};
