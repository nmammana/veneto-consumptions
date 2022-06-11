import React, { useContext } from "react";
import { AddButton } from "../../common/buttons/AddButton/AddButton";
import { Layout } from "../../common/Layout/Layout";
import { StaysTable } from "./Stays/StaysTable/StaysTable";
import "./Home.scss";
import { AdminPageContext } from "../../context/AdminPageContext";
import { TableType } from "../../../types/types";
import { ProductsTable } from "./Products/ProductsTable/ProductsTable";

export const Home = () => {
  const adminPageContext = useContext(AdminPageContext);

  switch (adminPageContext?.tableType) {
    case TableType.Stays:
      return (
        <div className="home">
          <Layout>
            <StaysTable />
          </Layout>
          <AddButton
            onClick={() => console.log("add button clicked")}
            className="floatingButton"
          />
        </div>
      );
    case TableType.Products:
      return (
        <div className="home">
          <Layout>
            <ProductsTable />
          </Layout>
          <AddButton
            onClick={() => console.log("add button clicked")}
            className="floatingButton"
          />
        </div>
      );
    default:
      return null;
  }
};
