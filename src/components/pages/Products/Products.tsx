import React from "react";
import { Layout } from "../../common/Layout/Layout";
import { CreateProductPopup } from "./CreateProductPopup/CreateProductPopup";
import { ProductsTable } from "./ProductsTable/ProductsTable";

export const Products = () => {
  return (
    <>
      <Layout>
        <ProductsTable />
      </Layout>
      <CreateProductPopup />
    </>
  );
};
