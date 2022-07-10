import React from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../../common/buttons/AddButton/AddButton";
import { Layout } from "../../common/Layout/Layout";
import "./Products.scss";
import { ProductsTable } from "./ProductsTable/ProductsTable";

export const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="root">
      <Layout>
        <ProductsTable />
      </Layout>
      <AddButton
        onClick={() => navigate("/editProduct")}
        className="floatingButton"
      />
    </div>
  );
};
